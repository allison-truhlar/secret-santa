import { createRequestHandler } from "@remix-run/express";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/database.js";

const port = process.env.PORT || 3000;

const app = express();

connectDB();

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

// routes
app.get("/", (req, res) => res.send("Hello from the deployed server!"));

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
