import { HelmetProvider } from "react-helmet-async";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// 각 페이지 컴포넌트를 import
import Layout from "./layout/Layout";
import MobileProvider from "./layout/MobileProvider";
// import BookDetailPage from "./pages/book/BookDetailPage";
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

// React Router의 BrowserRouter와 관련된 요소들을 사용하여 라우터 설정
const router = createBrowserRouter(
  createRoutesFromElements(
    // Layout 컴포넌트가 감싸는 최상위 라우트
    <>
      <Route
        path={Paths.Intro}
        element={
          <MobileProvider>
            <IntroPage />
          </MobileProvider>
        }
      />
      <Route element={<Layout />}>
        {/* 각 경로에 대한 페이지 컴포넌트 설정 */}
        <Route path="*" element={<MainPage />} />
        <Route path={Paths.Main} element={<MainPage />} />
        <Route path={Paths.Introduce} element={<IntroducePage />} />
        <Route path={Paths.Sermon} element={<SermonPage />} />
        <Route path={Paths.Missionary} element={<MissionaryPage />} />
        <Route path={Paths.HolySchool} element={<HolySchoolPage />} />
        <Route path={Paths.News} element={<NewsPage />} />
        <Route path={Paths.Book} element={<BookPage />} />
        <Route path="/book/:label1" element={<DynamicBookRouter />} />
      </Route>
    </>,
  ),
);

// React Router의 RouterProvider를 사용하여 앱 전체에 라우터를 적용
function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
