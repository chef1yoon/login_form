"use strict";

const name = document.querySelector("#name"),
  email = document.querySelector("#email"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    name: name.value,
    email: email.value,
    psword: psword.value,
  };

  console.log(req);
}
