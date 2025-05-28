// TiptapEditor.tsx
import Bold from "@tiptap/extension-bold";
import Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { ChangeEvent, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { db, storage } from "../firebase/Firebase";

interface Post {
  id?: string;
  content: string;
}

interface TiptapEditorProps {
  editingPost?: Post | null;
  onSaved?: () => void;
}

export function TiptapEditor({ editingPost, onSaved }: TiptapEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Bold,
      Italic,
      Underline,
      Image,
      Placeholder.configure({
        placeholder: "내용을 입력하세요",
      }),
    ],
    content: editingPost?.content || "",
  });

  const uploadImage = async (file: File): Promise<string> => {
    const imageRef = ref(storage, `images/${uuidv4()}-${file.name}`);
    await uploadBytes(imageRef, file);
    return await getDownloadURL(imageRef);
  };

  const addImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    setUploading(true);
    const url = await uploadImage(file);
    editor.chain().focus().setImage({ src: url }).run();
    setUploading(false);
  };

  const handleSubmit = async () => {
    if (!editor) return;
    const content = editor.getHTML();
    if (editingPost?.id) {
      const docRef = doc(db, "posts", editingPost.id);
      await updateDoc(docRef, { content });
    } else {
      await addDoc(collection(db, "posts"), {
        content,
        createdAt: new Date().toISOString(),
      });
    }
    editor.commands.clearContent();
    onSaved?.();
  };

  const handleAddLink = () => {
    if (!editor || !linkUrl) return;
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: linkUrl })
      .run();
    setLinkUrl("");
    setShowLinkInput(false);
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">🔴 tiptap</h2>
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="bg-gray-200 px-2"
        >
          B
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="bg-gray-200 px-2"
        >
          I
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className="bg-gray-200 px-2"
        >
          U
        </button>
        <button onClick={addImage} className="bg-gray-200 px-2">
          🖼 이미지
        </button>
        <button
          onClick={() => setShowLinkInput((prev) => !prev)}
          className="bg-gray-200 px-2"
        >
          🔗 링크
        </button>
        <input
          type="file"
          hidden
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          aria-label="이미지 업로드"
        />
      </div>
      {showLinkInput && (
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="링크 URL 입력"
            className="border px-2 py-1 rounded w-64"
            aria-label="링크 URL 입력"
          />
          <button
            onClick={handleAddLink}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            추가
          </button>
        </div>
      )}
      {uploading && <p>이미지 업로드 중...</p>}
      <EditorContent editor={editor} className="border p-2 min-h-[150px]" />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
      >
        {editingPost ? "수정" : "제출"}
      </button>
    </div>
  );
}
