"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

//2개의 객체들을 export해준다.
module.exports = {
  home,
  login,
};
