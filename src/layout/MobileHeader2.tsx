import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { WrapperLink } from "src/components/wrapperLink/WrapperLink";
import Paths from "src/types/paths";
import styled from "styled-components";

import Logo from "@/assets/logo.png";

const MENU_ITEMS = [
  { path: Paths.Introduce, label: "소개" },
  { path: Paths.Sermon, label: "말씀" },
  { path: Paths.HolySchool, label: "성령학교" },
  { path: Paths.NewsNotice, label: "소식" },
  { path: Paths.Book, label: "저서" },
  { path: Paths.Missionary, label: "선교사역" },
];

const StyledFlexContainer = styled(Flex)`
  position: relative;
  display: flex;
  width: 95%;
`;

const MenuButton = styled.button`
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.22);
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 0;

  span {
    width: 22px;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
    transition: all 0.3s ease;
  }

  &[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  &[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }

  &[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
`;

const MobileMenu = styled.nav<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 30;
  display: ${({ $isOpen }) => ($isOpen ? "grid" : "none")};
  min-width: 164px;
  overflow: hidden;
  border-radius: 6px;
  background: rgba(20, 20, 20, 0.92);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(6px);
`;

const MenuLink = styled(WrapperLink)`
  padding: 13px 18px;
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.12);
  }
`;

const StyledText = styled(Text)`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  color: white;
`;

const MobileHeader2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Spacer height={"3px"} />
      <StyledFlexContainer justifyContent="space-between" alignItems="center">
        <Flex>
          <WrapperLink to={Paths.Main}>
            <img src={Logo} alt={"logo"} width={"75px"} />
          </WrapperLink>
        </Flex>
        <MenuButton
          type="button"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-header-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </MenuButton>
        <MobileMenu id="mobile-header-menu" $isOpen={isMenuOpen}>
          {MENU_ITEMS.map(({ path, label }) => (
            <MenuLink to={path} key={path} onClick={() => setIsMenuOpen(false)}>
              <StyledText size={"15px"}>{label}</StyledText>
            </MenuLink>
          ))}
        </MobileMenu>
      </StyledFlexContainer>
      <Spacer height={"5px"} />
    </>
  );
};

export default MobileHeader2;
