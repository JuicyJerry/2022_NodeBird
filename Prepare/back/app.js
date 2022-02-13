const express = require("express");
const postRouter = require("./routes/post.js");

const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/api", (req, res) => {
  res.send("hello api");
});

app.get("/api/post", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello" },
    { id: 3, content: "hello" },
  ])
});

// app.use(postRouter);
app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행 중");
});