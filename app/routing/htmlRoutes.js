
//DEPENDENCIES
var path = require("path");

//ROUTING
module.exports = function(app){
    //HTML GET requests to display survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

        //Catch-all route that leads to home.html
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

