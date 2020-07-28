var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var UserRoute = require("./routes/user.route");

const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index", {
        name: "Tuan"
    });
});

app.use("/users", UserRoute)

app.listen(port, function () {
    console.log("listening to Port " + port);
})

