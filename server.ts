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
