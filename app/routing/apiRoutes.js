var friends = require("../data/friends");

var fs = require("fs");

//Routing

module.exports = function(app){
    //API GET requests 
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        //code that analyzes comparison of inputs from dropdown menu to value of each monster. will evaluate absolute value of selected value sum vs. monster sum. 
        //How do I get the friends.js file into here? the friends.js file is currently a giant array. right now the sum portion of it would be monsterArray.scores. I feel like a for loop is somewhere in my future because I have to go through each index in the array.

        fs.readFile("app/data/friends.js", "utf8", function (err, data){
            if (err) {
                return console.log(err);
            }

            var monsterArray = JSON.parse(data);
            console.log(monsterArray);
            
        });

    })
};