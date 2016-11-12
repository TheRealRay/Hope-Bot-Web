var express = require("express");
var app = express();
var logger = require("./utils/loggingUtils");
var entries = require("./model/entry.js");

app.listen((process.env.PORT || 3000), function () {
    logger.info("Example app listening on port 3000!");
});

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/static", express.static("public"));

app.get("/", function (req, res) {
    console.log("Ran");
    entries.execute(function(data) {
        console.log(data);
        res.render("index", {
            entries: data
        });
    });
});

app.use(function (req, res, next) {
    res.status(404).send("Page does not exist!");
});
