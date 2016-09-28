module.exports.sampleUsers = [
  {
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ],
   "total": 0
},
{
  "name":"Palm",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     1,
     5,
     1,
     2,
     3,
     2,
     1
   ],
   "total": 0
}
];



module.exports.compare = function (newUser) {
  //calculate sum
  newUser.scores = [];

  for(var i = 1; i < 11 ; i++) {
    newUser.scores.push(newUser[i]);
  }
  console.log(newUser.scores);

  var self = this;
  var userSum = this.findSum(newUser);

  this.sampleUsers[this.sampleUsers.length -1].total = userSum;

  //compare to each of the other users
  var currentBest = {
    index: 0,
    diff: 0
  };

  this.sampleUsers.forEach(function(el){

    var diff = Math.abs(userSum - self.findSum(el));

    switch (diff) {
      case ( diff < currentBest.diff):
        console.log("Found a better match");
        currentBest.index = self.sampleUsers.indexOf(el);
        currentBest.diff = diff;
        break;

      default:
        currentBest.index = self.sampleUsers.indexOf(el);
        currentBest.diff = diff;
    }


  });
  console.log("The best match for " + newUser.name  + " is " + this.sampleUsers[currentBest.index].name);
  // this.sampleUsers.push(newUser);
  return this.sampleUsers[currentBest.index];
}

module.exports.findSum = function (u){
  var sum = 0;
  u.scores.forEach(function(i){
    sum += i;
  });
  return sum;
}
