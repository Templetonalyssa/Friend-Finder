// This is getting the friends.js file

var friends = require("../data/friends");

//Routing

module.exports = function(app){
    //API GET requests 
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });


    app.post("/api/friends", function(req, res){
        //code that analyzes comparison of inputs from dropdown menu to value of each monster. will evaluate absolute value of selected value sum vs. monster sum. 
        //How do I get the friends.js file into here? the friends.js file is currently a giant array. right now the sum portion of it would be monsterArray.scores. I feel like a for loop is somewhere in my future because I have to go through each index in the array.
          
        console.log(req.body);
       
       var userScores = req.body.scores; 
       var newFriend = {};
       var minDiff = 100;
       for (var i = 0; i<friends.length; i++){
           var diff = 0;
           for (var j = 0; j<userScores.length; j++){
                var question = Math.abs(userScores[j]-friends[i].scores[j]);
                diff += question;
           }
           if (diff < minDiff){
               minDiff=diff;
               newFriend=friends[i];
           }
       }

        res.json(newFriend);

    })
};