import pg from "pg";
import { processRequestBody, returnErrorWithMessage } from "./utils.js";
const { Client } = pg;

const getPosts = async (req, res) => {
  try {
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    await client.connect();
    const results = await client.query("SELECT * FROM posts;");
    await client.end();
    res.statusCode = 200;
    res.json(results.rows);
  } catch (e) {
    console.log(e);
    returnErrorWithMessage(res);
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    await client.connect();
    const results = await client.query("SELECT * FROM posts WHERE id = $1;", [
      id,
    ]);
    await client.end();
    res.statusCode = 200;
    res.json(results.rows[0]);
  } catch (e) {
    console.log(e);
    returnErrorWithMessage(res);
  }
};

const createPost = async (req, res) => {
  try {
    const body = await processRequestBody(req);
    const parsedBody = JSON.parse(body);
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    client.connect();
    const results = await client.query(
      "INSERT INTO posts (author, title, content, cover) VALUES($1, $2, $3, $4) RETURNING *;",
      [
        parsedBody.author,
        parsedBody.title,
        parsedBody.content,
        parsedBody.cover,
      ]
    );
    res.statusCode = 201;
    res.json(results.rows[0]);
  } catch (e) {
    console.log(e);
    returnErrorWithMessage(res);
  }
};

const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const body = await processRequestBody(req);
    const parsedBody = JSON.parse(body);
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    await client.connect();
    const results = await client.query(
      "UPDATE posts SET author=$1, title=$2, content=$3, cover=$4 WHERE id=$5 RETURNING *;",
      [
        parsedBody.author,
        parsedBody.title,
        parsedBody.content,
        parsedBody.cover,
        id,
      ]
    );
    await client.end();
    res.statusCode = 201;
    res.json(results.rows[0]);
  } catch (e) {
    console.log(e);
    returnErrorWithMessage(res);
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    await client.connect();
    await client.query("DELETE FROM posts WHERE id=$1", [id]);
    await client.end();
    res.statusCode = 200;
    res.json({ message: "Post Deleted Successfully!" });
  } catch (e) {
    console.log(e);
    returnErrorWithMessage(res);
  }
};

export { getPosts, getPostById, createPost, updatePost, deletePost };
