var express = require("express");
var app = express();

app.use("/static", express.static("public"));

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!")
});

app.listen((process.env.PORT || 3000), function () {
    console.log("Example app listening on port 3000!");
});
