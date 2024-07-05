import express from "express";
// import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("I trigger for every body");
  next();
});

app.use("/dashBoard", (req, res, next) => {
  console.log("Hello I'm dashboard middleware");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log("I'm home page");
});

app.get("/dashBoard", (req, res) => {
  console.log("I'm dashboard get endpoint");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
