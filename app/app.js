"use strict";

//모듈
const express = require("express");
const app = express();
// 라우팅 (home이 routes/home파일 안에 있는 내용을 연결시키기 위해 선언해주었다.)
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
//ejs 엔진으로 코드를 해석하겠다.
app.set("view engine", "ejs");

//미들웨어를 등록하는 메소드로 index.js를 연결시켜준다.
app.use("/", home);

module.exports = app;
