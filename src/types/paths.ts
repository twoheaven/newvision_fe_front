enum Paths {
  Main = "/",
  Introduce = "/introduce",
  Sermon = "/sermon",
  Missionary = "/missionary",
  HolySchool = "/holyschool",
  News = "/news",
  Book = "/book",
  Intro = "/intro",
  BookDetail = "/book/:label1",

  // Vimeo 영상
  VimeoList = "/vimeo",
  VimeoDetail = "/vimeo/:id",

  // 게시판 관련 경로
  ViewPost = "/post/:id",
  Login = "/login",
  Register = "/register",
  NewPost = "/new",
  EditPost = "/edit/:id",
}

export default Paths;
