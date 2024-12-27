const express = require("express");
const app = express();
const path=require("path");

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")))

const bookingRoutes=require("./routes/booking");
const contactusRoutes=require("./routes/contactus");

app.use(bookingRoutes);
app.use(contactusRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

//Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});