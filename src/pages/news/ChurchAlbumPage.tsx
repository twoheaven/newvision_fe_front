import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { onAuthStateChanged, User } from "firebase/auth";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

import NewsPageHeader from "@/components/pageHeader/NewsPageHeader";
import useIsMobile from "@/hooks/useIsMobile";
import { auth } from "@/note/firebase/config";
import Fonts from "@/styles/fonts";

import {
  ChurchAlbumItem,
  deleteChurchAlbum,
  fetchAlbumsPage,
  uploadChurchAlbum,
} from "./churchAlbumService";
import NewsSectionNav from "./NewsSectionNav";

const MAX_UPLOAD_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const ChurchAlbumPage = () => {
  const isMobile = useIsMobile();
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [albums, setAlbums] = useState<ChurchAlbumItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const [page, setPage] = useState(1);
  const [cursorHistory, setCursorHistory] = useState<
    (QueryDocumentSnapshot<DocumentData> | null)[]
  >([null]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [deletingAlbumId, setDeletingAlbumId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const gridTemplateColumns = useMemo(
    () =>
      isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))",
    [isMobile],
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  const loadPage = async (targetPage: number) => {
    const cursor = cursorHistory[targetPage - 1] ?? null;
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const result = await fetchAlbumsPage({ cursor });
      setAlbums(result.items);
      setHasNext(result.hasNext);

      if (targetPage === cursorHistory.length && result.lastDoc) {
        setCursorHistory((prev) => [...prev, result.lastDoc]);
      }
    } catch (error) {
      console.error(error);
      const code = (error as { code?: string })?.code;
      if (code === "permission-denied") {
        setErrorMessage(
          "권한 설정으로 인해 앨범을 불러오지 못했습니다. 로그인 후 다시 시도해주세요.",
        );
      } else if (code === "failed-precondition") {
        setErrorMessage(
          "Firebase 인덱스가 필요합니다. 콘솔 링크에서 posts(category, createdAt) 복합 인덱스를 생성해주세요.",
        );
      } else {
        setErrorMessage("교회 앨범을 불러오지 못했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authReady) return;
    setCursorHistory([null]);
    setPage(1);
    loadPage(1);
    // loadPage intentionally uses the cursorHistory from this render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReady, user]);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.[0];
    if (!nextFile) {
      setFile(null);
      return;
    }

    if (!ALLOWED_TYPES.includes(nextFile.type)) {
      setErrorMessage("jpg, png, webp 파일만 업로드할 수 있습니다.");
      event.target.value = "";
      return;
    }

    if (nextFile.size > MAX_UPLOAD_SIZE) {
      setErrorMessage("이미지 용량은 10MB 이하만 가능합니다.");
      event.target.value = "";
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");
    setFile(nextFile);
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!user) {
      setErrorMessage("로그인 후 업로드할 수 있습니다.");
      return;
    }

    if (!title.trim()) {
      setErrorMessage("제목을 입력해주세요.");
      return;
    }

    if (!file) {
      setErrorMessage("이미지를 선택해주세요.");
      return;
    }

    try {
      setUploading(true);
      setErrorMessage("");
      setSuccessMessage("");
      await uploadChurchAlbum(title.trim(), file);
      setTitle("");
      setFile(null);
      setCursorHistory([null]);
      setPage(1);
      await loadPage(1);
      setSuccessMessage("교회 앨범이 업로드되었습니다.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
      const code = (error as { code?: string })?.code;
      const message = error instanceof Error ? error.message : "";
      if (code === "permission-denied") {
        setErrorMessage(
          "업로드 권한이 없습니다. Firebase Firestore 규칙을 확인해주세요.",
        );
      } else if (message) {
        setErrorMessage(message);
      } else {
        setErrorMessage("업로드 중 오류가 발생했습니다.");
      }
    } finally {
      setUploading(false);
    }
  };

  const onDeleteAlbum = async (id: string) => {
    if (!user) {
      setErrorMessage("로그인한 사용자만 교회 앨범을 삭제할 수 있습니다.");
      return;
    }

    const ok = window.confirm("선택한 교회 앨범을 삭제하시겠습니까?");
    if (!ok) return;

    try {
      setDeletingAlbumId(id);
      setErrorMessage("");
      setSuccessMessage("");
      await deleteChurchAlbum(id);
      setCursorHistory([null]);
      setPage(1);
      await loadPage(1);
      setSuccessMessage("교회 앨범이 삭제되었습니다.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
      const code = (error as { code?: string })?.code;
      const message = error instanceof Error ? error.message : "";
      if (code === "permission-denied") {
        setErrorMessage(
          "삭제 권한이 없습니다. Firebase Firestore 규칙을 확인해주세요.",
        );
      } else if (message) {
        setErrorMessage(message);
      } else {
        setErrorMessage("삭제 중 오류가 발생했습니다.");
      }
    } finally {
      setDeletingAlbumId(null);
    }
  };

  const onNext = async () => {
    const targetPage = page + 1;
    setPage(targetPage);
    await loadPage(targetPage);
  };

  const onPrev = async () => {
    const targetPage = page - 1;
    if (targetPage < 1) return;
    setPage(targetPage);
    await loadPage(targetPage);
  };

  return (
    <Area>
      <NewsPageHeader />

      <Spacer height={"15px"} />
      <NewsSectionNav />
      <Spacer height={"30px"} />

      <Flex
        flexDirection={"column"}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Text size={"24px"} font={Fonts.Bold}>
          교회 앨범
        </Text>
        <Spacer height={"8px"} />
      </Flex>

      <Spacer height={"30px"} />

      <Content>
        <Flex flexDirection="column" style={{ gap: "14px" }}>
          {user && (
            <form onSubmit={onSubmit}>
              <Flex
                gap="10px"
                style={{
                  flexWrap: "wrap",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="앨범 제목"
                  style={{
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    padding: "8px 10px",
                    minWidth: "180px",
                  }}
                />
                <input type="file" accept="image/*" onChange={onChangeFile} />
                <button
                  type="submit"
                  disabled={uploading}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#1f2937",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {uploading ? "업로드 중..." : "사진 올리기"}
                </button>
              </Flex>
            </form>
          )}

          {errorMessage && (
            <Text style={{ color: "#dc2626" }}>{errorMessage}</Text>
          )}
          {successMessage && (
            <Text style={{ color: "#16a34a" }}>{successMessage}</Text>
          )}

          {loading ? (
            <Text>로딩 중...</Text>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns,
                gap: "16px",
              }}
            >
              {albums.map((album) => (
                <div
                  key={album.id}
                  style={{
                    border: "1px solid #e5e7eb",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {user && (
                    <button
                      type="button"
                      onClick={() => onDeleteAlbum(album.id)}
                      disabled={deletingAlbumId !== null}
                      aria-label={`${album.title} 삭제`}
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        zIndex: 1,
                        border: "none",
                        borderRadius: "6px",
                        padding: "6px 10px",
                        backgroundColor: "rgba(17, 24, 39, 0.86)",
                        color: "#fff",
                        cursor: deletingAlbumId ? "default" : "pointer",
                      }}
                    >
                      {deletingAlbumId === album.id ? "삭제 중..." : "삭제"}
                    </button>
                  )}
                  <img
                    src={album.imageUrl}
                    alt={album.title}
                    style={{
                      width: "100%",
                      aspectRatio: "4 / 3",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div style={{ padding: "10px" }}>
                    <Text size="14px" font={Fonts.Bold}>
                      {album.title}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && albums.length === 0 && (
            <Text style={{ color: "#6b7280" }}>
              등록된 교회 앨범이 없습니다.
            </Text>
          )}

          <Flex justifyContent="center" gap="12px" style={{ marginTop: "6px" }}>
            <button
              type="button"
              onClick={onPrev}
              disabled={page === 1 || loading}
              style={{ padding: "8px 12px", border: "1px solid #d1d5db" }}
            >
              이전
            </button>
            <Text size="14px" style={{ alignSelf: "center" }}>
              {page} 페이지
            </Text>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext || loading}
              style={{ padding: "8px 12px", border: "1px solid #d1d5db" }}
            >
              다음
            </button>
          </Flex>
        </Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default ChurchAlbumPage;
