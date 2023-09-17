const express = require("express");
const app = express();

app.get('/',(req,res) => {
    res.send("Hello from Muhammad Subhan")
})

app.listen(process.env.PORT, () => {
    console.log('Listening the port at 5000')
})