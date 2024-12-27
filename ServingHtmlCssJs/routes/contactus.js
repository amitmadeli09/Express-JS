const express = require("express");
const path = require("path");
const routes = express.Router();
const rootDir=require("../util/path");

// Contact Us Page
routes.get("/contactus", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

// Handle Contact Form Submission
routes.post("/contactus", (req, res, next) => {
    console.log(req.body);
    res.redirect("/success");
});

routes.get("/success", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "thanks.html")); // Serves the success page
});

module.exports = routes;