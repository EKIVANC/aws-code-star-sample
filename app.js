var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    res.json({
        'name': 'Deloitte <3 Digital both deploy'
    });
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

module.exports = app;