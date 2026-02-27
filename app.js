const express = require("express");
const apiRoutes = require("./src/routes/index.routes");
const notFound = require("./src/middleware/notfound.middleware");
const errorHandler = require("./src/middleware/error.middleware");

const app = express();

// Global middleware
app.use(express.json());

// Versioned API
app.use("/api/v1", apiRoutes);

// Error middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;