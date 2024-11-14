import { Area, Content, Spacer } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import CelebrityPageHeader from "@/components/pageHeader/SermonPageHeader";

// Sermon 타입 정의
interface Sermon {
  id: number;
  date: string;
  title: string;
  link: string;
  preacher?: string;
}

function SermonList() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sermonPerPage] = useState(15); // 한 페이지에 표시할 설교 수
  const [selectedVideo, setSelectedVideo] = useState<Sermon | null>(null); // 클릭한 영상 정보 저장

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/twoheaven/youtube-fetch-actions/main/playlist.json",
    )
      .then((response) => response.json())
      .then((data) => {
        // "Deleted video"를 포함한 항목을 필터링
        const Sermons = data;
        setSermons(Sermons);
        setSelectedVideo(Sermons[0]); // 가장 첫 번째 설교를 자동으로 선택
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error fetching data");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading sermons...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // 페이지네이션 로직
  const indexOfLastSermon = currentPage * sermonPerPage;
  const indexOfFirstSermon = indexOfLastSermon - sermonPerPage;
  const currentSermons = sermons.slice(indexOfFirstSermon, indexOfLastSermon);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 페이지네이션 버튼 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sermons.length / sermonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>최신 설교</h2>
        <div>뉴비전교회 주일대예배, 수요예배 최신 설교를 보실 수 있습니다</div>
      </div>
      <Spacer height={"25px"}></Spacer>
      {/* 선택된 영상이 있을 때 영상 정보와 함께 화면 상단에 표시 */}
      {selectedVideo && (
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          {/* 선택된 영상의 제목과 날짜를 표 형식으로 변경 */}
          <table
            style={{
              margin: "20px auto",
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    paddingLeft: "20px",
                    borderLeft: "none", // 왼쪽 테두리 제거
                    borderRight: "none", // 오른쪽 테두리 제거
                    backgroundColor: "#E2E2E2",
                  }}
                >
                  {selectedVideo.date}
                  <span>&nbsp;&nbsp;&nbsp;</span>{" "}
                  <span
                    style={{
                      color: "gray",
                    }}
                  >
                    |
                  </span>{" "}
                  <span>&nbsp;&nbsp;&nbsp;김온유 목사</span>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    paddingLeft: "20px",
                    borderLeft: "none", // 왼쪽 테두리 제거
                    borderRight: "none", // 오른쪽 테두리 제거
                  }}
                >
                  <span>제목: </span> {selectedVideo.title}
                </td>
              </tr>
            </tbody>
          </table>{" "}
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${new URL(
                selectedVideo.link,
              ).searchParams.get("v")}`}
              allowFullScreen
              title="Sermon Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
      )}

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {currentSermons.map((sermon, index) => (
            <tr
              key={sermon.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#F6F9FF" : "#ffffff", // 하늘색과 흰색 번갈아 적용
              }}
            >
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  borderLeft: "none", // 왼쪽 테두리 제거
                  borderRight: "none", // 오른쪽 테두리 제거
                }}
              >
                <div
                  style={{
                    color: "gray", // 클릭할 수 있다는 인식을 주기 위해 색상 추가 (원하는 색으로 변경 가능)
                  }}
                >
                  {sermon.date}
                </div>
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  borderLeft: "none", // 왼쪽 테두리 제거
                  borderRight: "none", // 오른쪽 테두리 제거
                }}
              >
                <a
                  href={sermon.link}
                  onClick={(e) => {
                    e.preventDefault(); // 링크의 기본 동작을 막음 (새 창 열지 않음)
                    setSelectedVideo(sermon); // 클릭한 설교의 영상을 화면에 표시
                  }}
                  style={{
                    textDecoration: "none", // 제목에 줄이 그어지지 않도록 함
                    color: "black", // 클릭할 수 있다는 인식을 주기 위해 색상 추가 (원하는 색으로 변경 가능)
                  }}
                >
                  {sermon.title}
                </a>
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  borderLeft: "none", // 왼쪽 테두리 제거
                  borderRight: "none", // 오른쪽 테두리 제거
                }}
              >
                <div
                  style={{
                    color: "gray",
                  }}
                >
                  {sermon.preacher || "김온유 목사"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ padding: "5px 10px", margin: "0 5px" }}
        >
          이전
        </button>

        {/* 페이지 번호 버튼 추가 */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              padding: "5px 10px",
              margin: "0 5px",
              backgroundColor: currentPage === number ? "#007bff" : "#f0f0f0",
              color: currentPage === number ? "#fff" : "#000",
              border: "1px solid #ccc",
            }}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          style={{ padding: "5px 10px", margin: "0 5px" }}
        >
          다음
        </button>
      </div>
    </div>
  );
}

const SermonPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="김온유 목사 설교 말씀" />
      </Helmet>

      <Area>
        <CelebrityPageHeader />
        <Spacer height={"30px"} />
        <Content>
          <SermonList />
        </Content>
        <Spacer height={"100px"} />
      </Area>
    </>
  );
};

export default SermonPage;
