import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

// 각 페이지 컴포넌트를 import
import Layout from "./layout/Layout";
import MobileProvider from "./layout/MobileProvider";
import { auth } from "./note/firebase/config";
import EditPost from "./note/pages/EditPost";
import LoginPage from "./note/pages/LoginPage";
import NewPost from "./note/pages/NewPost";
import RegisterPage from "./note/pages/RegisterPage";
import ViewPost from "./note/pages/ViewPost";
import BookPage from "./pages/book/BookPage";
import DynamicBookRouter from "./pages/book/DynamicBookRouter";
import HolySchoolPage from "./pages/holyschool/HolySchoolPage";
import IntroPage from "./pages/intro/IntroPage";
import IntroducePage from "./pages/introduce/IntroducePage";
import MainPage from "./pages/main/MainPage";
import MissionaryPage from "./pages/missionary/MissionaryPage";
import NewsPage from "./pages/news/NewsPage";
import SermonPage from "./pages/sermon/SermonPage";
import Paths from "./types/paths";

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={Paths.Intro}
            element={
              <MobileProvider>
                <IntroPage />
              </MobileProvider>
            }
          />
          <Route element={<Layout />}>
            <Route path="*" element={<MainPage />} />
            <Route path={Paths.Main} element={<MainPage />} />
            <Route path={Paths.Introduce} element={<IntroducePage />} />
            <Route path={Paths.Sermon} element={<SermonPage />} />
            <Route path={Paths.Missionary} element={<MissionaryPage />} />
            <Route path={Paths.HolySchool} element={<HolySchoolPage />} />
            <Route path={Paths.News} element={<NewsPage />} />
            <Route path={Paths.Book} element={<BookPage />} />
            <Route path={Paths.BookDetail} element={<DynamicBookRouter />} />

            {/* 로그인하지 않아도 접근 가능 */}
            <Route path={Paths.ViewPost} element={<ViewPost />} />
            <Route path={Paths.Login} element={<LoginPage />} />
            <Route path={Paths.Register} element={<RegisterPage />} />

            {/* 로그인한 사용자만 접근 가능 */}
            {user ? (
              <>
                <Route path={Paths.NewPost} element={<NewPost />} />
                <Route path={Paths.EditPost} element={<EditPost />} />
              </>
            ) : (
              <>
                <Route
                  path={Paths.NewPost}
                  element={<Navigate to={Paths.Login} />}
                />
                <Route
                  path={Paths.EditPost}
                  element={<Navigate to={Paths.Login} />}
                />
              </>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
