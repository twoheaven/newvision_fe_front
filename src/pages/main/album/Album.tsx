import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { WrapperLink } from "@/components/wrapperLink/WrapperLink";
import useIsMobile from "@/hooks/useIsMobile";
import { db } from "@/note/firebase/config";
import { Post } from "@/note/types/post";
import al1 from "@/pages/main/album/dummy/앨범1.png";
import al2 from "@/pages/main/album/dummy/앨범2.png";
import al3 from "@/pages/main/album/dummy/앨범3.png";
import al4 from "@/pages/main/album/dummy/앨범4.png";
import Paths from "@/types/paths";

const FALLBACK_ALBUM_IMAGES = [al1, al2, al3, al4];

const Album = () => {
  const isMobile = useIsMobile();
  const [albumPosts, setAlbumPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumQuery = query(
          collection(db, "posts"),
          where("category", "==", "churchAlbum"),
          orderBy("createdAt", "desc"),
          limit(4),
        );
        const albumSnapshot = await getDocs(albumQuery);
        const albumDocs = albumSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[];
        setAlbumPosts(albumDocs);
      } catch (error) {
        console.error("메인 교회 앨범을 불러오는 중 오류가 발생했습니다:", error);
        const code = (error as { code?: string })?.code;
        if (code === "failed-precondition") {
          console.error(
            "Firestore 인덱스가 필요합니다: posts 컬렉션의 category + createdAt 복합 인덱스를 생성하세요.",
          );
        }
        setAlbumPosts([]);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <meta name="description" content="메인 화면 교회 앨범" />
        </Helmet>
      </div>
      <Content>
        <Spacer height={"30px"} />
        <Flex
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="center"
        >
          <Text size={isMobile ? "24px" : "34px"}>교회 앨범</Text>
          <Flex justifyContent="flex-end" style={{ width: "100%" }}>
            <WrapperLink to={Paths.NewsAlbum}>
              <Text
                size={isMobile ? "14px" : "18px"}
                style={{ marginTop: isMobile ? "-10px" : "-16px" }}
              >
                + 더보기
              </Text>
            </WrapperLink>
            <Spacer height={"5px"} />
          </Flex>
          <Flex gap={isMobile ? "5px" : "5px"} justifyContent="center">
            {albumPosts.length > 0
              ? albumPosts.map((post) => (
                  <img
                    key={post.id}
                    src={post.thumbnailUrl || post.imagePath || post.imageUrl}
                    alt={post.title}
                    width={isMobile ? "49%" : "24%"}
                    style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                  />
                ))
              : FALLBACK_ALBUM_IMAGES.map((image, index) => (
                  <img key={index} src={image} width={isMobile ? "49%" : "24%"} />
                ))}
          </Flex>
          <Spacer height={isMobile ? "20px" : "50px"} />
        </Flex>
      </Content>
    </>
  );
};

export default Album;
