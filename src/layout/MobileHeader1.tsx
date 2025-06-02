// 필요한 컴포넌트 및 라이브러리 가져오기
import { Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";

// 로고 이미지 가져오기
import naverBlogIcon from "@/assets/블로그아이콘.png";
import youtubeIcon from "@/assets/유튜브아이콘.png";
import instagramIcon from "@/assets/인스타아이콘.png";

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
            src={youtubeIcon}
            alt="유튜브"
            style={{
              width: "20px",
            }}
          />
        </a>
        {/* Instagram 링크를 위한 WrapperLink */}
        <a href={"https://www.instagram.com/new_vision_story"}>
          <img
            src={instagramIcon}
            alt="인스타그램"
            style={{
              width: "16px",
            }}
          />
        </a>

        {/* Naver 블로그 링크를 위한 WrapperLink */}
        <a href={"https://blog.naver.com/new_vision_church"}>
          <img
            src={naverBlogIcon}
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
