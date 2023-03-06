"use strict";
const express = require("express");
const { sequelize, Sequelize } = require("../../db/models");

const router = express.Router();

// Get Coffee
router.get("/ping", async (req, res, next) => {
  res.status(200);
  return res.json({
    status: "good",
  });
});
