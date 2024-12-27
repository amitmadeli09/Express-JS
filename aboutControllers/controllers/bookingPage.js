const path = require("path");

exports.getHomePage = (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", "booking.html"));
};

exports.postDetails = (req, res, next) => {
    console.log(req.body);
    res.redirect("/success");
};

exports.successPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", "thanks.html"));
};
