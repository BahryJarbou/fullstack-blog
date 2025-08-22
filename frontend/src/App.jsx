import { useState } from "react";
import { Routes, Route, Outlet } from "react-router";
import CreatePost from "./pages/createPost";
import PostDetails from "./pages/postDetails";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/postDetails" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
