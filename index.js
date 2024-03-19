const express = require('express');
const app = express();
const router = require("./routes/router");
const db = require("./config/db");
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
    console.log(`Server started ${port}`);
});