module.exports.postId = function(req, res, next){
    var errors = [];
    if(!req.body.name){
        errors.push("name is required");
    }
    if(!req.body.email){
        errors.push("email is required");
    }
    if(!req.body.password){
        errors.push("password is required");
    }
    if(!req.body.phone){
        errors.push("Phone is required");
    }
    if(errors.length){
        res.render("users/create",{
            errors: errors,
            values: req.body
        });
        return;
    };
    next();
}