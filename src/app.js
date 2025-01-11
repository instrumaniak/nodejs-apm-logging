// src/app.js
require("dotenv").config();
const express = require("express");
const apm = require("elastic-apm-node").start({
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME || "",
  secretToken: process.env.ELASTIC_APM_SECRET_TOKEN || "", // Add Elastic APM secret token if applicable
  serverUrl: process.env.ELASTIC_APM_SERVER_URL || "", // APM Server URL
  environment: process.env.ELASTIC_APM_ENV || "development",
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
