var express = require("express");
var router = express.Router();

var controller = require("../controller/user.controller");
var validate = require("../validate/user.validate");
var authMiddleWare = require("../middleware/auth.middleware");
 
router.get("/",authMiddleWare.requireAuth ,controller.list);

router.get("/search", controller.search);

router.get("/create", authMiddleWare.requireAuth  , controller.create);

router.get("/:id", controller.get);

router.post("/create",validate.postId, controller.postId);

module.exports = router;
