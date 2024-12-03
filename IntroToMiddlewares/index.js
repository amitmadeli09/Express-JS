const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Add Products Middleware
app.use("/add-product", (req, res, next) => {
    console.log("In another Middleware");
    res.send(`
        <html>
            <body>
                <form action="/product" method="POST">
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


app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    console.log("In the first Middleware");
    res.send("<h1>Hello from Express JS</h1>");
});

app.listen(3000);