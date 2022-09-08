import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { AppContainer } from "./ui/App";

const PORT = 8000;

const app = express();

app.use("/", (req, res, next) => {
  fs.readFile(
    path.resolve(__dirname, "./build", "index.html"),
    "utf-8",
    (err, data) => {
      if (err) {
        return res.status(500).send("Some error happened");
      }
      const html = data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <AppContainer />
        )}</div>`
      );
      console.log(ReactDOMServer.renderToString(<AppContainer />), "lol");
      return res.send(html);
    }
  );
  return res.send("hello ");
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
