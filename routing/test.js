var myProfile = 
{
  "name":"Pine",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     2,
     1,
     4,
     1,
     5,
     4,
     2,
     1,
     2,
     5
   ],
   "total": 0
}

var data = require("../data/friends.js");
data.compare(myProfile);
