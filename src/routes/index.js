// src/routes/index.js
const express = require("express");
const logger = require("../logger");

const router = express.Router();

router.get("/", (req, res) => {
  logger.info("Root endpoint accessed");
  res.send({ message: "Welcome to the Sample Node.js Service!" });
});

router.get("/error", (req, res) => {
  logger.error("Simulated error occurred");
  res.status(500).send({ error: "Something went wrong!" });
});

module.exports = router;
