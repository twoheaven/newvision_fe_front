// 파일: src/pages/NewPost.tsx

import React, { useState } from "react";

import RichTextEditor from "../components/RichTextEditor";

const NewPost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">새 게시글 작성</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <RichTextEditor content={content} setContent={setContent} title={title} />
    </div>
  );
};

export default NewPost;
