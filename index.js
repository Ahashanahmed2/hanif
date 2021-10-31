const mongoos = require("./server/database");
const dotenv = require("dotenv");
const express = require("express");
const {urlencoded,json} = require("body-parser");
const path = require("path");
const route = require("./routes/allRoute");
const api = require('./api/apiAll')

mongoos();
const app = express();
dotenv.config();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/js", express.static(path.join(__dirname, "assets/js")));
app.set("view engine", "ejs");

app.use("/", route);
app.use("/api", api);

app.listen(process.env.PORT, (err) => {
  if (!err) {
    console.log(`server is connected http://localhost${process.env.PORT}`);
  }
});
