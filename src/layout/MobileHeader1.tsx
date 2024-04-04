// 필요한 컴포넌트 및 라이브러리 가져오기
import { Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";

import instagramLogo from "@/assets/instagram-logo.svg";
// 로고 이미지 가져오기
import naverBlogLogo from "@/assets/naver-blog-logo.png";
import youtubeLogo from "@/assets/youtube-logo.svg";

// Header를 나타내는 함수형 컴포넌트
const MobileHeader1 = () => {
  return (
    <div>
      <Spacer height={"7px"} />
      {/* Flex 컨테이너 - 공간을 벌려주고, 아이템을 가운데 정렬 */}
      {/* 소셜 링크 모음 */}
      <Flex
        gap={"10px"}
        alignItems={"center"}
        style={{
          justifyContent: "flex-end",
          marginRight: "10px",
        }}
      >
        {/* YouTube 링크를 위한 WrapperLink */}
        <a href={"https://www.youtube.com/@kimonyou153"}>
          <img
            src={youtubeLogo}
            alt="유튜브"
            style={{
              width: "20px",
            }}
          />
        </a>
        {/* Instagram 링크를 위한 WrapperLink */}
        <a href={"https://www.instagram.com/new_vision_story"}>
          <img
            src={instagramLogo}
            alt="인스타그램"
            style={{
              width: "16px",
            }}
          />
        </a>

        {/* Naver 블로그 링크를 위한 WrapperLink */}
        <a href={"https://blog.naver.com/new_vision_church"}>
          <img
            src={naverBlogLogo}
            alt="네이버블로그"
            style={{
              width: "16px",
            }}
          />
        </a>
      </Flex>
      {/* 가로선 구분자 */}

      <Divider />
    </div>
  );
};

// Header 컴포넌트 내보내기
export default MobileHeader1;
