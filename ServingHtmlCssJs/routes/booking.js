const express = require("express");
const path = require("path");
const routes = express.Router();
const rootDir=require("../util/path");

//Booking Page
routes.get("/home", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "booking.html"));
});

//Handle Form Submission
routes.post("/home", (req, res, next) => {
    console.log(req.body);
    res.redirect("/success");
});

routes.get("/success", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "thanks.html")); // Serves the success page
});

module.exports = routes;