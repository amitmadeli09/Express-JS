const express = require("express");
const app = express();
const path = require("path");

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const bookingRoutes = require("./routes/booking");
const contactusRoutes = require("./routes/contactus");

app.use(bookingRoutes);
app.use(contactusRoutes);

// 404 Error Handling
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});