// 파일: src/pages/EditPost.tsx

import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RichTextEditor from "../components/RichTextEditor";
import { db } from "../firebase/config";

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isNotice, setIsNotice] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const docSnap = await getDoc(doc(db, "posts", id));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setContent(data.content);
          setIsNotice(data.isNotice || false);
        }
      } catch (error) {
        console.error("게시글을 불러오는 중 오류가 발생했습니다:", error);
        alert("게시글을 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (isLoading) {
    return <div className="p-4">로딩 중...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">게시글 수정</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <RichTextEditor
        content={content}
        setContent={setContent}
        isEditing={true}
        title={title}
        postId={id}
        initialIsNotice={isNotice}
      />
    </div>
  );
};

export default EditPost;
