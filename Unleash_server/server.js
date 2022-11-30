const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;
const db = require("./sequelize/models");
var cookieParser = require("cookie-parser");
const { test } = require("./controller/dbload.controller");

app.use(
  cors({ origin: true, credentials: true }),
  express.json(),
  cookieParser()
);
app.listen(port, () => {
  console.log("서버가 정상적으로 실행되었습니다.");
});

app.get("/", async (req, res) => {
  res.json(await test());
});

test();

require("./routes/index.js")(app);
