import { createRequestHandler } from "@remix-run/express";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/database.js";
import { createGroup } from "./controllers/controllers.js";

const port = process.env.PORT || 5000;

const app = express();

connectDB();

// // accept Content-Type: application/json
// app.use(express.json());
// accept Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
app.post("/create", createGroup);

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
