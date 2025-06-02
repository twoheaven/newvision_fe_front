// 파일: src/pages/ViewPost.tsx

import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import NewsPageHeader from "../../components/pageHeader/NewsPageHeader";
import useIsMobile from "../../hooks/useIsMobile";
import Fonts from "../../styles/fonts";
import Paths from "../../types/paths";
import { auth, db } from "../firebase/config";
import { Post } from "../types/post";
const ViewPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [prevPost, setPrevPost] = useState<Post | null>(null);
  const [nextPost, setNextPost] = useState<Post | null>(null);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // 이전글/다음글 가져오기
  const fetchAdjacentPosts = async (currentPost: Post) => {
    const postsRef = collection(db, "posts");

    // 이전글 가져오기 (현재 글보다 번호가 큰 글 중 가장 작은 번호)
    const prevQuery = query(
      postsRef,
      where("postNumber", ">", currentPost.postNumber),
      orderBy("postNumber"),
      limit(1),
    );

    // 다음글 가져오기 (현재 글보다 번호가 작은 글 중 가장 큰 번호)
    const nextQuery = query(
      postsRef,
      where("postNumber", "<", currentPost.postNumber),
      orderBy("postNumber", "desc"),
      limit(1),
    );

    const [prevSnapshot, nextSnapshot] = await Promise.all([
      getDocs(prevQuery),
      getDocs(nextQuery),
    ]);

    if (!prevSnapshot.empty) {
      const prevDoc = prevSnapshot.docs[0];
      setPrevPost({ id: prevDoc.id, ...prevDoc.data() } as Post);
    }

    if (!nextSnapshot.empty) {
      const nextDoc = nextSnapshot.docs[0];
      setNextPost({ id: nextDoc.id, ...nextDoc.data() } as Post);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        console.error("게시글 ID가 없습니다.");
        navigate("/home");
        return;
      }
      const docSnap = await getDoc(doc(db, "posts", id));
      if (docSnap.exists()) {
        const currentPost = { id, ...docSnap.data() } as Post;
        setPost(currentPost);
        fetchAdjacentPosts(currentPost);
      } else {
        console.error("게시글을 찾을 수 없습니다.");
        navigate("/home");
      }
    };
    fetchPost();
  }, [id, navigate]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async () => {
    if (!id) {
      console.error("게시글 ID가 없습니다.");
      return;
    }

    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await deleteDoc(doc(db, "posts", id));
        navigate("/home");
      } catch (error) {
        console.error("게시글 삭제 중 오류가 발생했습니다:", error);
        alert("게시글 삭제에 실패했습니다.");
      }
    }
  };
  const isMobile = useIsMobile();

  if (!post) return <div className="p-4">Loading...</div>;

  return (
    <>
      <NewsPageHeader />

      <Spacer height={"30px"} />
      <Flex
        flexDirection={"column"}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <h1 className="text-center text-2xl font-bold mb-8">
          <Text size={"24px"} font={Fonts.Bold}>
            공지
          </Text>
        </h1>

        <p
          className="text-center mb-8 text-gray-600"
          style={{ translate: "0 -20px" }}
        >
          뉴비전교회 공지사항을 알려드립니다.
        </p>
        <Spacer height={"10px"} />
      </Flex>

      <Flex justifyContent="center" width={isMobile ? "92%" : "100%"}>
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            alignContent: "initial",
            justifyItems: "initial",
          }}
          className="p-4"
        >
          <div
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#F2F2F2",
                padding: "16px",
                borderTop: "1px solid gray",
                borderBottom: "1px solid gray",
              }}
            >
              <Text
                style={{
                  fontSize: "20px",
                  color: "#000000",
                  fontFamily: Fonts.Medium,
                }}
              >
                {post.title}
              </Text>
            </div>
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                padding: "16px",
                borderBottom: "1px solid gray",
                display: "flex",
                gap: "10px",
              }}
            >
              <Flex
                style={{
                  color: "#666666",
                  fontSize: "14px",
                  gap: "10px",
                }}
              >
                <span>
                  {" "}
                  {!user && post.author ? (
                    <span className="text-gray-400">관리자</span>
                  ) : (
                    post.author
                  )}
                </span>
                <span>|</span>
                <span>
                  등록일:{" "}
                  {new Date(post.createdAt)
                    .toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\. /g, ".")
                    .replace(".", ".")}
                </span>
              </Flex>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose"
            style={{
              width: "108%",
              overflow: "hidden",
            }}
          />
          <style>
            {`
            .prose img {
              max-width: 100%;
              height: auto;
              display: block;
              margin: 1em 0;
            }
            `}
          </style>
          <Spacer height={"30px"} />
          <div style={{ borderBottom: "1px solid gray", width: "105%" }} />
          {/* 이전글/다음글 네비게이션 */}
          <Spacer height={"20px"} />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              {prevPost && (
                <Link
                  to={`/post/${prevPost.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#666666",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>이전글</span>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/post/${nextPost.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#666666",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{ fontSize: "20px", transform: "translateX(-14px)" }}
                  >
                    |{" "}
                  </span>

                  <span style={{ transform: "translateX(-15px)" }}>다음글</span>
                </Link>
              )}
            </div>
            <Link
              to={Paths.News}
              style={{
                textDecoration: "none",
                color: "#666666",
                padding: "4px 12px",
                border: "1px solid #666666",
                borderRadius: "4px",
              }}
            >
              목록
            </Link>
          </div>
          <Spacer height={"20px"} />
          {/* ✅ 로그인된 사용자만 수정/삭제 버튼 보기 */}
          {user && (
            <div className="mt-4 flex gap-2">
              <button>
                <Link
                  to={`/edit/${post.id}`}
                  className="bg-yellow-500 text-white px-3 py-1"
                >
                  수정
                </Link>
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-3 py-1"
              >
                삭제
              </button>
            </div>
          )}
        </div>
      </Flex>
      <Spacer height={"100px"} />
    </>
  );
};

export default ViewPost;
