var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var UserRoute = require("./routes/user.route");
var cookieParser = require("cookie-parser");
var authRoute = require("./routes/auth.route");
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", function (req, res) {
    res.render("index", {
        text: "this is the restaurant list page"
    });
});

app.use("/users", UserRoute);
app.use("/auth", authRoute);

app.listen(port, function () {
    console.log("listening to Port " + port);
})

