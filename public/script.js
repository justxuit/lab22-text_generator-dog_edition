// script.js, any js file that might perform AJAX operations
var thought = "";

setInterval(function() {

    $.get("/api/randDogThought", function(data){
      thoughts = data;

      $(".a-thought").text('"'+thoughts+'"');

    });

}, 3000);
