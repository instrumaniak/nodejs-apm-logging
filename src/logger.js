const winston = require("winston");
const { ElasticsearchTransport } = require("winston-elasticsearch");

// Configure Elasticsearch transport
const esTransportOpts = {
  level: "info",
  clientOpts: {
    node: process.env.ELASTIC_SEARCH_URL || "", // Replace with your Elasticsearch URL
  },
  indexPrefix: "logs", // Optional: Customize the index name
};

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
    new ElasticsearchTransport(esTransportOpts), // Add Elasticsearch transport
  ],
});

module.exports = logger;
