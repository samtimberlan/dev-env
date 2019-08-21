import express from "express";
import path from "path";
//import open from "open";

//webpack setup
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const compiler = webpack(config);

const port = 3000 || process.env.PORT;
const app = express();

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"), err => {
    console.log(err);
  });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Billy", age: 10 },
    { id: 2, name: "John", age: 11 },
    { id: 2, name: "Gate", age: 12 }
  ]);
});

app.get("/careers", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/careers.html"), err => {
    console.log(err);
  });
});

app.listen(port, () => {
  console.log("App running on " + port);
});
