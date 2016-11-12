var express = require("express");
var app = express();

app.listen((process.env.PORT || 3000), function () {
    console.log("Example app listening on port 3000!");
});

app.set('views', './views');
app.set('view engine', 'ejs');

app.use("/static", express.static("public"));

app.get("/", function (req, res) {
    res.render('index');
});

app.use(function (req, res, next) {
  res.status(404).send("Page does not exist!");
});
