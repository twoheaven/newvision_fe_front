import { Spacer } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";

// Sermon 타입 정의
interface Sermon {
  id: number;
  date: string;
  title: string;
  link: string;
  preacher?: string;
}

type PaginationItem = number | "start-ellipsis" | "end-ellipsis";

const getPaginationItems = (
  currentPage: number,
  totalPages: number,
): PaginationItem[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "end-ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "start-ellipsis",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "start-ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "end-ellipsis",
    totalPages,
  ];
};

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
  const totalPages = Math.max(1, Math.ceil(sermons.length / sermonPerPage));
  const indexOfLastSermon = currentPage * sermonPerPage;
  const indexOfFirstSermon = indexOfLastSermon - sermonPerPage;
  const currentSermons = sermons.slice(indexOfFirstSermon, indexOfLastSermon);
  const paginationItems = getPaginationItems(currentPage, totalPages);

  const paginate = (pageNumber: number) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .sermon-date, .sermon-preacher {
              display: none;
            }
          }

          .sermon-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 28px;
          }

          .sermon-pagination__button,
          .sermon-pagination__ellipsis {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 38px;
            height: 38px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
          }

          .sermon-pagination__button {
            border: 1px solid #d7dfec;
            background: #ffffff;
            color: #3f4b5f;
            cursor: pointer;
            transition:
              background-color 0.2s ease,
              border-color 0.2s ease,
              color 0.2s ease;
          }

          .sermon-pagination__button:hover:not(:disabled) {
            border-color: #1877f2;
            background: #eef5ff;
            color: #1877f2;
          }

          .sermon-pagination__button:disabled {
            opacity: 0.38;
            cursor: not-allowed;
          }

          .sermon-pagination__button--active {
            border-color: #1877f2;
            background: #1877f2;
            color: #ffffff;
            box-shadow: 0 6px 14px rgba(24, 119, 242, 0.18);
          }

          .sermon-pagination__ellipsis {
            color: #8792a2;
            user-select: none;
          }

          @media (max-width: 480px) {
            .sermon-pagination {
              gap: 4px;
            }

            .sermon-pagination__button,
            .sermon-pagination__ellipsis {
              width: 34px;
              height: 34px;
              font-size: 13px;
            }
          }
        `}
      </style>
      <div>
        <div style={{ textAlign: "center" }}>
          <h2>최신 설교</h2>
          <div>
            뉴비전교회 주일대예배, 수요예배 최신 설교를 보실 수 있습니다
          </div>
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
                  className="sermon-date"
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    borderLeft: "none", // 왼쪽 테두리 제거
                    borderRight: "none", // 오른쪽 테두리 제거
                    height: "40px", // 고정 높이 설정
                    whiteSpace: "nowrap", // 줄바꿈 금지
                    overflow: "hidden", // 넘치는 텍스트 숨기기
                    textOverflow: "ellipsis", // 넘치는 텍스트를 ...으로 표시
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
                  className="sermon-preacher"
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    borderLeft: "none", // 왼쪽 테두리 제거
                    borderRight: "none", // 오른쪽 테두리 제거
                    width: "80px", // 칸의 너비를 넓히기 위한 설정
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
        <nav className="sermon-pagination" aria-label="설교 페이지 이동">
          <button
            type="button"
            aria-label="이전 페이지"
            title="이전 페이지"
            className="sermon-pagination__button"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {paginationItems.map((item) =>
            typeof item === "number" ? (
              <button
                key={item}
                type="button"
                className={`sermon-pagination__button${
                  currentPage === item
                    ? " sermon-pagination__button--active"
                    : ""
                }`}
                aria-label={`${item} 페이지로 이동`}
                aria-current={currentPage === item ? "page" : undefined}
                onClick={() => paginate(item)}
              >
                {item}
              </button>
            ) : (
              <span
                key={item}
                className="sermon-pagination__ellipsis"
                aria-hidden="true"
              >
                ...
              </span>
            ),
          )}

          <button
            type="button"
            aria-label="다음 페이지"
            title="다음 페이지"
            className="sermon-pagination__button"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </nav>
      </div>
    </>
  );
}

export default SermonList;
