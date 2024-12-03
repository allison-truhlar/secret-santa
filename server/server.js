import { createRequestHandler } from "@remix-run/express";
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import apiRoutes from "./routes/index.js";

const port = process.env.API_PORT;

const app = express();

connectDB();

// // accept Content-Type: application/json
app.use(express.json());
// app.use(cors({ origin: "http://localhost:5000" }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

// routes
app.use("/api", apiRoutes);

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

app.use(
  viteDevServer ? viteDevServer.middlewares : express.static("build/client")
);

const build = viteDevServer
  ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
  : await import("../build/server/index.js");

const remixHandler = createRequestHandler({ build });

app.all("*", remixHandler);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
