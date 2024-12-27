const express = require("express");
const routes = express.Router();
const contactusController = require("../controllers/contactusPage");

// Contact Us Page
routes.get("/contactus", contactusController.getContactusPage);

// Handle Contact Form Submission
routes.post("/contactus", contactusController.contactUsDetails);

// Success Page
routes.get("/success", contactusController.successPage);

module.exports = routes;