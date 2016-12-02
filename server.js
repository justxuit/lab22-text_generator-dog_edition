var express = require('express');
var app = express();



// server.js, any file with a created and configured an express app
app.use(express.static(__dirname + "/public"))



var dogThoughts = ["Burrito!", "Ball?", "Ball!", "SQUIRREL!!", "Walk?", "Nap.", "Let me sniff you.", "Rub my belly.", "On the internet, no one knows you're a dog.", "HELLO YES THIS IS DOG", "You gonna finish that?", "I hid under the porch because I love you."];

var randDogThought = function(){
  return dogThoughts[Math.floor(Math.random() * dogThoughts.length)];
};


app.get('/api/randDogThought', function (req, res) {
  res.send(randDogThought());
});


// app.get('/api/dogThoughts', function (req, res) {
//   res.send(dogThoughts);
// });


var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('This app listening at http://localhost:%s', port);
});
