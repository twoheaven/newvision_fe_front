// PostList.tsx
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { db } from "../firebase/Firebase";
import { TiptapEditor } from "./TiptapEditor";

interface Post {
  id: string;
  content: string;
}

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const fetchData = async () => {
    const snap = await getDocs(collection(db, "posts"));
    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Post[];
    setPosts(data);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "posts", id));
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">게시판 목록</h2>
      <TiptapEditor
        editingPost={editingPost}
        onSaved={() => {
          setEditingPost(null);
          fetchData();
        }}
      />
      {posts.map((post) => (
        <div key={post.id} className="border p-2 my-2">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="flex gap-2 mt-1">
            <button
              onClick={() => setEditingPost(post)}
              className="bg-blue-300 px-2"
            >
              수정
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-300 px-2"
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
