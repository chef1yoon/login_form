"use strict";

//포트번호를 변수로 받아서 설정해주는것이 좋다.
const PORT = 3000;

const app = require("../app");

app.listen(PORT, () => {
  console.log("서버 가동");
});
