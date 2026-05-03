import { Button, Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useLocation, useNavigate } from "react-router-dom";
import Fonts from "@/styles/fonts";
import Paths from "@/types/paths";

const NewsSectionNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isNotice = pathname === Paths.NewsNotice || pathname === Paths.News;
  const isAlbum = pathname === Paths.NewsAlbum;

  return (
    <>
      <Flex justifyContent="center" gap={"8px"}>
        <Flex alignItems="center" gap={"8px"}>
          <Button
            onClick={() => navigate(Paths.NewsNotice)}
            style={{ fontFamily: isNotice ? Fonts.Bold : Fonts.Regular }}
          >
            공지
          </Button>
          <span style={{ color: "#c7c7c7", fontFamily: Fonts.Regular }}>|</span>
        </Flex>
        <Button
          onClick={() => navigate(Paths.NewsAlbum)}
          style={{ fontFamily: isAlbum ? Fonts.Bold : Fonts.Regular }}
        >
          교회 앨범
        </Button>
        <Spacer height={"8px"} />
      </Flex>
      <Divider />
    </>
  );
};

export default NewsSectionNav;
