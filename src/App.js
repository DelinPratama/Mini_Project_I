import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//*IMPORT PAGE
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import VerificationPage from "./pages/verification";
import BlogsPage from "./pages/blogs";
import FormUploadImage from "./pages/user.profile";
import UserProfile from "./pages/user.profile";
import Navbar2 from "./components/navbar/navbar2";
import NewArticle from "./pages/new.article";
import DetailBlog from "./pages/detail.blog";
import Footer from "./components/footer";

//*IMPORT COMPONENT
import ProtectedRoute from "./protected.routes";

//*IMPORT ACTION
import { keepLogin } from "./store/slices/auth/slices";
import "./App.style.css";
function App() {
  //*HOOKs
  const dispatch = useDispatch();
  const { isKeepLoginLoading } = useSelector((state) => {
    return {
      isKeepLoginLoading: state.auth?.isKeepLoginLoading,
    };
  });

  //*SIDE EFFECT
  useEffect(() => {
    dispatch(keepLogin());
  }, []);

  if (isKeepLoginLoading)
    return (
      <div className="h-screen w-screen flex flex-row align-bottom justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );

  return (
    <div className="container w-full bg-white">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<BlogsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification/:token" element={<VerificationPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/newArticle" element={<NewArticle />} />
        <Route path="/detailBlog" element={<DetailBlog />} />
      </Routes>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
