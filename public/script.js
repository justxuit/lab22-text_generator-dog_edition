// script.js, any js file that might perform AJAX operations


setInterval(function() {

    $.get("/api/randDogThought", function(thoughts){
        $(".a-thought").text('"'+thoughts+'"');

        console.log(thoughts);
    });

}, 5000);



/*NOT QUITE WORKING*/

// var thoughts= "";
//
// setInterval(function() {
//
//   $.get("/api/randDogThought", function(data){
//     thoughts = data;
//   });
//
//   $(".a-thought").text('"'+thoughts+'"');
//
// }, 1000);





// var thoughts = "";
//
// $.get("/api/dogThoughts", function(data){
//   thoughts = data;
// });
//
//
// setInterval(function(){
//
//   $(".a-thought").text('"'+thoughts+'"');
// }, 1000);
