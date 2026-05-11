import { Button, Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useLocation, useNavigate } from "react-router-dom";

import {
  categoryDividerStyle,
  getCategoryButtonStyle,
} from "@/styles/categoryButton";
import Paths from "@/types/paths";

const NewsSectionNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isNotice = pathname === Paths.NewsNotice || pathname === Paths.News;
  const isAlbum = pathname === Paths.NewsAlbum;

  return (
    <>
      <Flex
        justifyContent="center"
        gap={"8px"}
        style={{ flexWrap: "wrap", rowGap: "8px" }}
      >
        <Flex alignItems="center" gap={"8px"}>
          <Button
            onClick={() => navigate(Paths.NewsNotice)}
            style={getCategoryButtonStyle(isNotice)}
          >
            공지
          </Button>
          <span style={categoryDividerStyle}>|</span>
        </Flex>
        <Button
          onClick={() => navigate(Paths.NewsAlbum)}
          style={getCategoryButtonStyle(isAlbum)}
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
