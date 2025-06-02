// 필요한 컴포넌트 및 라이브러리 가져오기
import { Area, Content, Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";
import styled from "styled-components";

// 로고 이미지 가져오기
import naverBlogIcon from "@/assets/블로그아이콘.png";
import youtubeIcon from "@/assets/유튜브아이콘.png";
import instagramIcon from "@/assets/인스타아이콘.png";

const StyledHeaderArea = styled(Area)`
  background-color: "white"; /* 원하는 배경색으로 변경 */
`;

// Header를 나타내는 함수형 컴포넌트
const Header = () => {
  return (
    // Header 영역
    <StyledHeaderArea>
      <Content>
        <Spacer height={"7px"} />
        {/* Flex 컨테이너 - 공간을 벌려주고, 아이템을 가운데 정렬 */}
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          style={{
            padding: "0px 0",
          }}
        >
          {/* 왼쪽 섹션 - 로고, 설명, 메뉴 등 */}
          <Flex gap={"20px"} alignItems={"center"}>
            {/* 로그인 상태에 따라 콘텐츠 생성 버튼 표시 */}
          </Flex>
          {/* 소셜 링크 모음 */}
          <Flex gap={"10px"} alignItems={"center"}>
            {/* YouTube 링크를 위한 WrapperLink */}
            <a href={"https://www.youtube.com/@kimonyou153"}>
              <img
                src={youtubeIcon}
                alt="유튜브"
                style={{
                  width: "28px",
                }}
              />
            </a>
            {/* Instagram 링크를 위한 WrapperLink */}
            <a href={"https://www.instagram.com/newvision_manna/"}>
              <img
                src={instagramIcon}
                alt="인스타그램"
                style={{
                  width: "24px",
                }}
              />
            </a>

            {/* Naver 블로그 링크를 위한 WrapperLink */}
            <a href={"https://blog.naver.com/new_vision_church"}>
              <img
                src={naverBlogIcon}
                alt="네이버블로그"
                style={{
                  width: "24px",
                }}
              />
            </a>
          </Flex>
        </Flex>
      </Content>

      {/* 가로선 구분자 */}
      <Divider />
    </StyledHeaderArea>
  );
};

// Header 컴포넌트 내보내기
export default Header;
