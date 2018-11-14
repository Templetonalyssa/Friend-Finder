var friends = require("../data/friends");

//Routing

module.exports = function(app){
    //API GET requests 
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        //code that analyzes comparison of inputs from dropdown menu to value of each monster. will evaluate absolute value of selected value sum vs. monster sum
    });
};