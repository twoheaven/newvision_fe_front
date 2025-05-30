// component/RichTextEditor.tsx

/**
 * TipTap 기반의 리치 텍스트 에디터 컴포넌트
 * - Bold, Italic, Link, 이미지 삽입 지원
 * - 이미지는 ImgBB 호스팅 서비스 사용
 */

import Bold from "@tiptap/extension-bold";
import Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import LinkExtension from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import imageCompression from "browser-image-compression";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase/config";

const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

if (!IMGBB_API_KEY) {
  console.error(
    "ImgBB API 키가 설정되지 않았습니다. .env 파일을 확인해주세요.",
  );
}

interface RichTextEditorProps {
  content: string;
  setContent: (content: string) => void;
  title: string;
  postId?: string;
  isEditing?: boolean;
  initialIsNotice?: boolean;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  setContent,
  title,
  postId,
  isEditing = false,
  initialIsNotice = false,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNotice, setIsNotice] = useState(initialIsNotice);
  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, LinkExtension, Image],
    content,
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
  });

  const uploadToImgBB = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("이미지 업로드에 실패했습니다.");
      }

      const data = await response.json();
      return data.data.url;
    } catch (error) {
      console.error("이미지 업로드 중 오류:", error);
      throw new Error("이미지 업로드에 실패했습니다.");
    }
  };

  const handleImageUpload = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        try {
          // 이미지 압축 옵션
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 800,
            useWebWorker: true,
          };

          // 이미지 압축 실행
          const compressedFile = await imageCompression(file, options);

          // 로딩 표시
          editor?.chain().focus().insertContent("이미지 업로드 중...").run();

          // ImgBB에 업로드
          const imageUrl = await uploadToImgBB(compressedFile);

          // 로딩 텍스트 제거 및 이미지 삽입
          editor?.chain().focus().undo().run();
          editor?.chain().focus().setImage({ src: imageUrl }).run();
        } catch (error) {
          console.error("이미지 처리 중 오류:", error);
          alert(
            error instanceof Error
              ? error.message
              : "이미지 처리 중 오류가 발생했습니다.",
          );
          // 로딩 텍스트가 있다면 제거
          editor?.chain().focus().undo().run();
        }
      }
    };

    input.click();
  }, [editor]);

  const handleSubmit = async () => {
    if (!auth.currentUser) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!content.trim() || content === "<p></p>") {
      alert("내용을 입력해주세요.");
      return;
    }

    try {
      setIsSubmitting(true);

      if (isEditing && postId) {
        // 수정 모드
        const docRef = doc(db, "posts", postId);
        await updateDoc(docRef, {
          title,
          content,
          isNotice,
          updatedAt: new Date().toISOString(),
        });
        navigate(`/post/${postId}`);
      } else {
        // 새 글 작성 모드
        // 마지막 글번호 가져오기
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("postNumber", "desc"));
        const querySnapshot = await getDocs(q);
        const lastPostNumber = querySnapshot.empty
          ? 0
          : querySnapshot.docs[0].data().postNumber || 0;

        // 새 게시글 데이터
        const newPostData = {
          postNumber: lastPostNumber + 1,
          title,
          content,
          author: auth.currentUser.email || "익명",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isNotice,
        };

        // Firestore에 저장
        const newDocRef = await addDoc(collection(db, "posts"), newPostData);

        // 저장 성공 시 상세 페이지로 이동
        navigate(`/post/${newDocRef.id}`);
      }
    } catch (error) {
      console.error("게시글 저장 중 오류:", error);
      alert("게시글 저장에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 p-2 bg-gray-100 rounded items-center">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="px-3 py-1 bg-white rounded shadow-sm hover:bg-gray-50"
        >
          Bold
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="px-3 py-1 bg-white rounded shadow-sm hover:bg-gray-50"
        >
          Italic
        </button>
        <button
          onClick={() => {
            let url = window.prompt("URL 입력");
            if (url) {
              if (!/^https?:\/\//i.test(url)) {
                url = "https://" + url;
              }
              editor?.chain().focus().setLink({ href: url }).run();
            }
          }}
          className="px-3 py-1 bg-white rounded shadow-sm hover:bg-gray-50"
        >
          Link
        </button>
        <button
          onClick={handleImageUpload}
          className="px-3 py-1 bg-white rounded shadow-sm hover:bg-gray-50"
        >
          이미지
        </button>
        <div className="ml-auto flex items-center gap-2">
          <input
            type="checkbox"
            id="isNotice"
            checked={isNotice}
            onChange={(e) => setIsNotice(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-500"
          />
          <label htmlFor="isNotice" className="text-sm text-gray-700">
            공지사항
          </label>
        </div>
      </div>
      <EditorContent
        editor={editor}
        className="border p-4 min-h-[300px] rounded"
      />
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? "저장 중..." : isEditing ? "수정" : "저장"}
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
