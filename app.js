var express = require("express"),
    app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/results", function(req, res){
    res.render("results")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up shawty");
});