const express = require("express");

const app = express();

app.use(express.static("./dist/price-search"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/price-search/" });
});

app.listen(process.env.PORT || 4200);
