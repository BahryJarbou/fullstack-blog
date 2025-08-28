import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { PostsContextProvider } from "./context/postsContext.jsx";
import { PostContextProvider } from "./context/postContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostsContextProvider>
      <PostContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostContextProvider>
    </PostsContextProvider>
  </StrictMode>
);
