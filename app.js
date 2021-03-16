const http = require("http");
const app = http.createServer((req, res) => {
  //req.url은 request경로로 들어온 후에 뒤에 있는 url을 파싱을 할 수 있다는 뜻입니다.
  //조건문으로도 라우팅이 가능합니다.
  //또한 한글로 읽는다는것도 설정해주어야 합니다.

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url === "/") {
    res.end("여기는 루트입니다.");
  } else if (req.url === "/login") {
    res.end("여기는 로그인 화면입니다.");
  }
});

app.listen(3001, () => {
  console.log("http로 가동된 서버이다.");
});

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("여기는 루트이다.");
// });

// app.get("/login", (req, res) => {
//   res.send("여기는 로그인 화면이다.");
// });

// app.listen(3000, function () {
//   console.log("서버 가동");
// });
