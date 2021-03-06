"use strict";

const express = require("express");
const router = express.Router();
//home.ctrl파일을 들고온다.
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;
