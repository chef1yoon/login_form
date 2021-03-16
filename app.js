const express = require("express");
const app = express();

//앱 세팅
app.set("views", "./views");
//ejs 엔진으로 코드를 해석하겠다.
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/index");
});

app.get("/login", (req, res) => {
  res.render("home/login");
});

app.listen(3000, function () {
  console.log("서버 가동");
});
