const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 Error Handling
app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
    console.log("Server Started on http://localhost:3000");
});
