var express = require('express');
var app = express();


// server.js, any file with a created and configured an express app
app.use(express.static(__dirname + "/public"))


var dogThoughts = [
  "Ball?",
  "SQUIRREL!!",
  "On the internet, no one knows you're a dog.",
  "I ate your shoes because I love you.",
  "Roses are gray, violets are gray, the mailman is evil.",
  "What if I never find out who's a good boy?",
  "Why do humans harvest our poop?",
  "Master runs slow because he only uses half of his legs.",
  "If I wasn't around, my human would end up losing dozens of balls every day.",
  "Master just tied me to a tree. Now I am human, tree is dog.",
  "I don't want the ball. Then Master says, 'Who wants the ball?' Then I realize that I want the ball.",
  "How come I can't bring a stick inside, but my human can bring in a whole tree?",
  "Why does the trash can get fed treats all day?!",
  "I lick Master every day, but she has never licked me. :(",
  "Master is afraid of walking alone so he always attaches me to him with a rope. Is this normal?"
];

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
