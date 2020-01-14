// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    }
    var userData = req.body;
    var scores = userData.scores;

    var totalDiff;
    for(var i=0; i<friendsData.length; i++){
        var currentFriend = friends[i];
        totalDiff = 0;

        for(var j=0; j<currentFriend.scores.length;j++){
            var currentFriendScore = currentFriend.scores[j];
            var currentUserScore = scores[j];

            totalDiff += Math.abs(parseInt(currentFriendScore)- parseInt(currentUserScore));

        }
        if(totalDiff <= bestMatch.friendDifference){
            bestMatch.name = currentFriend.name;
            bestMatch.photo = currentFriend.photo;
            bestMatch.friendDifference = totalDiff;
        }
    }
    friendsData.push(userData)
    res.json(bestMatch)
  });

};
