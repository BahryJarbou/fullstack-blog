import express from "express";
import cors from "cors";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "./crudOperations.js";

const app = express();
const port = 3000;
app.use(cors());

app.get("/posts", getPosts);
app.get("/posts/:id", getPostById);
app.post("/posts", createPost);
app.put("/posts/:id", updatePost);
app.delete("/posts/:id", deletePost);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
