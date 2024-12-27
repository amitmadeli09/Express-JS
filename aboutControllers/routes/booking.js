const express = require("express");
const routes = express.Router();
const bookingController = require("../controllers/bookingPage");

// Booking Page
routes.get("/home", bookingController.getHomePage);

// Handle Form Submission
routes.post("/home", bookingController.postDetails);

// Success Page
routes.get("/success", bookingController.successPage);

module.exports = routes;