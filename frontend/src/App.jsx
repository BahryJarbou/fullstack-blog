import { useStatem } from "react";
import { Routes, Route, Outlet } from "react-router";
import CreatePost from "./pages/createPost.jsx";
import PostDetails from "./pages/postDetails.jsx";
import About from "./pages/about.jsx";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/postDetails/:id" element={<PostDetails />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
