const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");
const sellerRoute = require("./routes/seller");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(cors());

app.use(sellerRoute);

sequelize
  .sync()
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
