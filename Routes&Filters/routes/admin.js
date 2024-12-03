const express = require("express");
const router = express.Router();

// Route for displaying the form
router.get("/add-product", (req, res, next) => {
    res.send(`
        <html>
            <body>
                <form action="/admin/add-product" method="POST">
                    <label for="product">Product:</label>
                    <input type="text" id="product" name="product" placeholder="Enter a Product">
                    <label for="size">Size:</label>
                    <input type="number" id="size" name="size" placeholder="Enter a size">
                    <button type="submit">SUBMIT</button>
                </form>
            </body>
        </html>
    `);
});

// Route for handling form submission
router.post("/add-product", (req, res, next) => {
    console.log(req.body); // Logs the submitted data
    res.redirect("/");
});

module.exports = router;