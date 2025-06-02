import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "@/note/firebase/config";
import { Post } from "@/note/types/post";
import news from "@/pages/main/newsnewfam/asset/공지배경.png";
import visit1 from "@/pages/main/newsnewfam/asset/교회직접방문.png";
import visit2 from "@/pages/main/newsnewfam/asset/온라인등록.png";
import train from "@/pages/main/newsnewfam/asset/훈련&행사배경.png";
import Paths from "@/types/paths";

const MobileNewsnewfam = () => {
  const navigate = useNavigate();
  const [noticePosts, setNoticePosts] = useState<Post[]>([]);
  const [eventPosts, setEventPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 공지사항 가져오기 (최근 3개)
        const noticeQuery = query(
          collection(db, "posts"),
          where("isNotice", "==", true),
          limit(3),
        );
        const noticeSnapshot = await getDocs(noticeQuery);
        const noticeDocs = noticeSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[];
        setNoticePosts(noticeDocs);

        // 훈련&행사 게시글 가져오기 (최근 3개)
        const eventQuery = query(
          collection(db, "posts"),
          where("category", "==", "event"),
          limit(3),
        );
        const eventSnapshot = await getDocs(eventQuery);
        const eventDocs = eventSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[];
        setEventPosts(eventDocs);
      } catch (error) {
        console.error("게시글을 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleVisit1Click = () => {
    console.log("Navigating to", Paths.Introduce);
    navigate(Paths.Introduce, {
      state: { visit1: "새가족안내" },
    });
  };

  const handleVisit2Click = () => {
    console.log("Navigating to", Paths.Introduce);
    navigate(Paths.Introduce, {
      state: { visit2: "새가족안내" },
    });
  };

  const handlePostClick = (postId: string) => {
    if (!postId) return;
    navigate(`/post/${postId}`);
  };

  return (
    <Content>
      <Flex justifyContent="center" flexDirection="column">
        <Text size={"24px"}>교회소식</Text>
        <Flex justifyContent="space-between">
          <div style={{ position: "relative", width: "49.5%", height: "auto" }}>
            <img
              src={news}
              width={"100%"}
              style={{
                height: "auto",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                color="white"
                style={{
                  marginBottom: "10px",
                  textAlign: "center",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => navigate(Paths.News)}
              >
                공지
              </Text>
              <div style={{ overflow: "hidden" }}>
                {noticePosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => post.id && handlePostClick(post.id)}
                    style={{
                      cursor: "pointer",
                      padding: "4px 0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Text
                      color="white"
                      size="14px"
                      style={{
                        opacity: 0.9,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      {post.title}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ position: "relative", width: "49.5%", height: "auto" }}>
            <img
              src={train}
              width={"100%"}
              style={{
                height: "auto",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                color="white"
                style={{
                  marginBottom: "10px",
                  textAlign: "center",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => navigate(Paths.News)}
              >
                훈련 & 행사
              </Text>
              <div style={{ overflow: "hidden" }}>
                {eventPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => post.id && handlePostClick(post.id)}
                    style={{
                      cursor: "pointer",
                      padding: "4px 0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Text
                      color="white"
                      size="14px"
                      style={{
                        opacity: 0.9,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      {post.title}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Text size={"24px"}>새가족 등록</Text>
        <div style={{ cursor: "pointer" }} onClick={handleVisit1Click}>
          <img src={visit1} width={"100%"} />
        </div>
        <Spacer height={"5px"} />
        <div style={{ cursor: "pointer" }} onClick={handleVisit2Click}>
          <img src={visit2} width={"100%"} />
        </div>
      </Flex>
      <Spacer height={"10px"} />
    </Content>
  );
};

export default MobileNewsnewfam;
