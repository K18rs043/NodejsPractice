var shortid = require("shortid");
var db = require("../db");
var md5 = require("md5");

module.exports.index = function (req, res) {
    res.render("users/index", {
        users: db.get("users").value()
    });
}

module.exports.search = function (req, res) {
    var q = req.query.q;
    var match = db.get("users").value().filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render("users/index", {
        users: match,
        question: q
    })
}

module.exports.create = function(req, res){
    res.render("users/create");
}

module.exports.get = function(req, res){
    var id = req.params.id;
    var user = db.get("users").find({ id: id}).value();
    res.render("users/view",{
        user: user
    });
}

module.exports.postId = function(req, res){
    req.body.id = shortid.generate();
    req.body.password = md5(req.body.password);
    db.get("users").push(req.body).write();
    res.redirect("/users");
}