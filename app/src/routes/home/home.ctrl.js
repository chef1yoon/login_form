"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  name: ["karen", "coco", "hello"],
  email: ["karen@email.com", "coco@email.com", "hello@email.com"],
  psword: ["123456", "12345678", "123456789"],
};

const process = {
  login: (req, res) => {
    const name = req.body.name,
      email = req.body.email,
      psword = req.body.psword;

    if (users.name.includes(name)) {
      const namex = users.name.indexOf(name);
      if (users.pswrod[namex] === psword) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패",
    });
  },
};

//2개의 객체들을 export해준다.
module.exports = {
  output,
  process,
};
