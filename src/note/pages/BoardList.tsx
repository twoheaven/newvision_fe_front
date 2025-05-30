// 파일: src/pages/BoardList.tsx

import { Flex } from "@dohyun-ko/react-atoms";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Fonts from "../../styles/fonts";
import Paths from "../../types/paths";
import { auth, db } from "../firebase/config";
import { Post } from "../types/post";

const BoardList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("postNumber", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedPosts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[];

        // 공지사항을 먼저 보여주기 위해 정렬
        const sortedPosts = fetchedPosts.sort((a, b) => {
          if (a.isNotice && !b.isNotice) return -1;
          if (!a.isNotice && b.isNotice) return 1;
          // 공지사항끼리는 번호 내림차순
          if (a.isNotice && b.isNotice) {
            return (b.postNumber || 0) - (a.postNumber || 0);
          }
          // 일반 게시글끼리는 번호 내림차순
          return (b.postNumber || 0) - (a.postNumber || 0);
        });

        setPosts(sortedPosts);
      } catch (error) {
        console.error("게시글 목록을 불러오는 중 오류가 발생했습니다:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) return <div className="p-4">로딩 중...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4" style={{ width: "80%" }}>
      <Flex style={{ width: "100%" }}>
        <div className="overflow-x-auto" style={{ width: "100%" }}>
          <table
            className="min-w-full bg-white"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr
                style={{
                  borderTop: "2px solid #333",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <th
                  className="text-xs font-medium text-gray-500 tracking-wider"
                  style={{
                    width: "8%",
                    padding: "12px 6px",
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  번호
                </th>
                <th
                  className="text-xs font-medium text-gray-500 tracking-wider"
                  style={{
                    padding: "12px 6px",
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  제목
                </th>
                <th
                  className="text-xs font-medium text-gray-500 tracking-wider"
                  style={{
                    width: "10%",
                    padding: "12px 6px",
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  작성자
                </th>
                <th
                  className="text-xs font-medium text-gray-500 tracking-wider"
                  style={{
                    width: "14%",
                    padding: "12px 6px",
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  작성일
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-gray-50"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <td
                    className="whitespace-nowrap text-sm text-gray-500"
                    style={{ padding: "12px 6px", textAlign: "center" }}
                  >
                    {post.isNotice ? (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span
                          style={{
                            backgroundColor: "#EE8B7C",
                            color: "white",
                            padding: "6px 8px",
                            borderRadius: "4px",
                            fontSize: "18px",
                            fontFamily: Fonts.Bold,
                            display: "inline-block",
                            width: "31px",
                            textAlign: "center",
                            letterSpacing: "-0.5px",
                          }}
                        >
                          공지
                        </span>
                      </div>
                    ) : (
                      post.postNumber
                    )}
                  </td>
                  <td
                    className="whitespace-nowrap"
                    style={{ padding: "12px 6px" }}
                  >
                    <Link
                      to={`/post/${post.id}`}
                      style={{
                        textDecoration: "none",
                        color: hoveredId === post.id ? "#2563eb" : "#111827",
                        transition: "color 0.2s ease",
                        fontSize: "0.875rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      onMouseEnter={() => post.id && setHoveredId(post.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {post.title}
                      {post.hasAttachment && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                      )}
                    </Link>
                  </td>
                  <td
                    className="whitespace-nowrap text-sm text-gray-500"
                    style={{ padding: "12px 6px", textAlign: "center" }}
                  >
                    {post.author}
                  </td>
                  <td
                    className="whitespace-nowrap text-sm text-gray-500"
                    style={{ padding: "12px 6px", textAlign: "center" }}
                  >
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Flex>
      {user && (
        <div className="mt-4 flex justify-end">
          <Link
            to={Paths.NewPost}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            글쓰기
          </Link>
        </div>
      )}
    </div>
  );
};

export default BoardList;
