"use strict";

const express = require("express");
const router = express.Router();
//home.ctrl파일을 들고온다.
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;
