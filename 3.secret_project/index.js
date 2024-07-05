import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
var userIsAuthorised = false;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use((req, res, next) => {
  if (req.body.password === "wicky") {
    userIsAuthorised = true;
    next();
  }
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) res.sendFile(__dirname + "/public/secret.html");
  else res.redirect("/");
});

app.listen(port, () => {
  console.log(`App is listning on port ${port}`);
});
