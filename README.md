# Express Server with Prometheus Metrics

This document describes a basic Express.js server setup that includes:

- Routing via a centralized router file
- Prometheus metrics using `express-prom-bundle`
- Basic server initialization on port 3000

---

## 📁 File Overview

```ts
import router from "@routes/index.router";
import express from "express";

const app = express();

const port = 3000;

const promBundle = require("express-prom-bundle");

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  includeUp: true,
  customLabels: {
    project_name: "vish_metrics",
    project_type: "test_metrics_labels",
  },
  promClient: {
    collectDefaultMetrics: {},
  },
});

app.use(metricsMiddleware);

app.use("/api", router);

app.listen(port, () => {
  console.log("Server Listening on port =>", port);
});



🔧 What This Code Does
1. Imports Required Modules
express: Web framework for Node.js.

@routes/index.router: Custom Express router that handles API routes.

express-prom-bundle: Middleware for exposing Prometheus-compatible metrics.

What this does:

Enables metrics collection for:

HTTP method (GET, POST, etc.)

Request path (/api, /users, etc.)

Status code (200, 404, etc.)

Server uptime

Adds custom labels (project_name and project_type)

Uses Prometheus client to collect default Node.js metrics (memory, CPU, etc.)