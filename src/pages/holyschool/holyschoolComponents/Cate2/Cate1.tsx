import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms"; // @dohyun-ko/react-atoms 패키지에서 Flex, Spacer, Text를 가져옴

import ShadowText from "@/components/text/shadowtext"; // "@/components/text/shadowtext"에서 ShadowText 컴포넌트를 가져옴
import Fonts from "@/styles/fonts"; // "@/styles/fonts"에서 Fonts를 가져옴

import img1 from "../asset/4.킹덤리더스쿨.png"; // "../asset/1.성경맥잡기학교 (1).jpg" 이미지를 가져옴
import img3 from "../asset/5.청년리더훈련(nltc).png"; // "../asset/1.성경맥잡기학교 (3).jpg" 이미지를 가져옴

const Cate1 = () => {
  const color1 = "#996633"; // color1 변수에 "#996633" 할당
  const color2 = "#996633"; // color2 변수에 "#996633" 할당
  const color3 = "#996633"; // color3 변수에 "#996633" 할당

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      {" "}
      {/* 세로 중앙 정렬된 Flex 컨테이너 */}
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        {" "}
        {/* 상대 위치, 가로 전체, 높이 자동 조절되는 div */}
        <img
          src={img1}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />{" "}
        {/* 이미지 표시 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          {" "}
          {/* 텍스트가 중앙 정렬된 div */}
          <ShadowText size={"28px"} font={Fonts.Bold}>
            킹덤리더스쿨
          </ShadowText>{" "}
          {/* 그림자 효과가 있는 텍스트 */}
          <Spacer height={"10px"} /> {/* 10px 간격 */}
          <ShadowText size={"12px"}>KINGDOM LEADER SCHOOL</ShadowText>{" "}
          {/* 그림자 효과가 있는 텍스트 */}
        </div>
      </div>
      <Spacer height={"50px"} />
      <Text>성령학교 전체과정 중에서</Text>{" "}
      <Text>&lt;8가지 핵심 엑기스&gt;를 바탕으로</Text>
      <Text>주님과 동역하는 영적 리더로 준비되는 수업</Text>
      <Spacer height={"30px"} />
      <Text>
        선과 악의 기준이 모호해지며 불분명해지는 악한 세대 가운데
      </Text>{" "}
      <Text>하나님 나라의 사고방식과 성경적인 세계관으로 무장하는 수업</Text>
      <Spacer height={"30px"} />
      <Text>
        하나님을 아는 지식과 성경적인 인사이트를 함양하여 참과 거짓을 분별하고,
      </Text>{" "}
      <Text>
        단단한 식물을 씹을만한 성경적인 지각으로 범사에 헤아려 선한 것을 취하며,
      </Text>
      <Text>
        선한 일을 위해서 주님과 동역할 수 있는 추수할 리더로 양육된다.
      </Text>
      <Spacer height={"30px"} />
      {/* 텍스트 */}
      <Spacer height={"80px"} /> {/* 80px 간격 */}
      <Text size={"24px"} font={Fonts.Bold}>
        8가지 핵심 엑기스
      </Text>
      <Spacer height={"20px"} />
      <div
        style={{
          width: "90%",
        }}
      >
        <Flex>
          <div
            style={{
              width: "10%",
              backgroundColor: `blue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                01
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: `skyblue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                물질론
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "60%",
              backgroundColor: `gray`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"}>청지기 되기</Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
        </Flex>
        <Spacer height={"10px"} />
        <Flex>
          <div
            style={{
              width: "10%",
              backgroundColor: `blue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                02
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: `skyblue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                종말론
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "60%",
              backgroundColor: `gray`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"}>주님 언제 오시는가</Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
        </Flex>
        <Spacer height={"10px"} />
        <Flex>
          <div
            style={{
              width: "10%",
              backgroundColor: `blue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                03
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: `skyblue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                마귀론
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "60%",
              backgroundColor: `gray`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"}>마귀 전략 분석하기</Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
        </Flex>
        <Spacer height={"10px"} />
        <Flex>
          <div
            style={{
              width: "10%",
              backgroundColor: `blue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                04
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: `skyblue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                이성교제와 결혼
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "60%",
              backgroundColor: `gray`,
              alignContent: "center",
            }}
          >
            <Flex
              style={{
                marginLeft: "10px",
              }}
            >
              <Spacer height={"5px"} />
              <Text size={"18px"}>거룩한 신부</Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
        </Flex>
        <Spacer height={"10px"} />
        <Flex>
          <div
            style={{
              width: "10%",
              backgroundColor: `blue`,
              alignContent: "center",
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                05
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: `skyblue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                영혼육의 이해
              </Text>
              <Text size={"24px"} color="white">
                음성듣기와 예언
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "60%",
              backgroundColor: `gray`,
              alignContent: "center",
            }}
          >
            <Flex
              style={{
                marginLeft: "10px",
              }}
            >
              <Spacer height={"5px"} />
              <Text size={"18px"}>음성듣고 따르는 양 / 실습과 훈련 포함</Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
        </Flex>
        <Spacer height={"10px"} />
        <Flex>
          <div
            style={{
              width: "10%",
              backgroundColor: `blue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                06
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: `skyblue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                구원론
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "60%",
              backgroundColor: `gray`,
              alignContent: "center",
            }}
          >
            <Flex
              style={{
                marginLeft: "10px",
              }}
            >
              <Spacer height={"5px"} />
              <Text size={"18px"}>한번 구원, 영원 구원 절대 아닌 이유</Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
        </Flex>
        <Spacer height={"10px"} />
        <Flex>
          <div
            style={{
              width: "10%",
              backgroundColor: `blue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                07
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: `skyblue`,
            }}
          >
            <Flex justifyContent="center">
              <Spacer height={"5px"} />
              <Text size={"24px"} color="white">
                성령론
              </Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
          <div
            style={{
              width: "60%",
              backgroundColor: `gray`,
              alignContent: "center",
            }}
          >
            <Flex
              style={{
                marginLeft: "10px",
              }}
            >
              <Spacer height={"5px"} />
              <Text size={"18px"}>말세 성령의 역할 이해하기</Text>
              <Spacer height={"5px"} />
            </Flex>
          </div>
        </Flex>
        <Spacer height={"10px"} />
      </div>
      <Spacer height={"80px"} />
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        {" "}
        {/* 상대 위치, 가로 전체, 높이 자동 조절되는 div */}
        <img
          src={img3}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />{" "}
        {/* 이미지 표시 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          {" "}
          {/* 텍스트가 중앙 정렬된 div */}
          <ShadowText size={"28px"} font={Fonts.Bold}>
            청년리더훈련(NLTC)
          </ShadowText>{" "}
          {/* 그림자 효과가 있는 텍스트 */}
          <Spacer height={"10px"} /> {/* 10px 간격 */}
          <ShadowText size={"12px"}>
            New-vision Leader Training Course
          </ShadowText>{" "}
          {/* 그림자 효과가 있는 텍스트 */}
        </div>
      </div>
      <Spacer height={"50px"} />
      <Text>NLTC 설명 New-vision Leader Trainning Course</Text>
      <Text>NLTC 설명 New-vision Leader Trainning Course</Text>
      <Text>NLTC 설명 New-vision Leader Trainning Course</Text>
      <Text>NLTC 설명 New-vision Leader Trainning Course</Text>
      <Text>NLTC 설명 New-vision Leader Trainning Course</Text>
      <Text>NLTC 설명 New-vision Leader Trainning Course</Text>
      <Text>NLTC 설명 New-vision Leader Trainning Course</Text>
      <Text>NLTC 설명 New-vision Leader Trainning Course</Text>
    </Flex>
  );
};

export default Cate1; // Cate1 컴포넌트 내보내기
