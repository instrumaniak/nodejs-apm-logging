// src/app.js
const express = require("express");
const apm = require("elastic-apm-node").start({
  serviceName: "sample-nodejs-service",
  // secretToken: "", // Add Elastic APM secret token if applicable
  serverUrl: "http://apm-server:8200", // APM Server URL
  environment: "development",
});
const logger = require("./logger");
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// app.use(apm.middleware.connect()); // Integrate APM middleware

// Routes
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
