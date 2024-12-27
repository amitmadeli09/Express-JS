const path = require("path");

exports.getContactusPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
};

exports.contactUsDetails = (req, res, next) => {
    console.log(req.body);
    res.redirect("/success");
};

exports.successPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", "thanks.html"));
};