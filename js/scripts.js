/*Pseudocode */
// console.log("hi");
// 1. Link JS file in index.html.
// Test to check JS file is linked correctly

// var userInput = []; //Array to store user Input

$(document).ready(function() {
  $("#submit").click(function() {
    var total = 5;
    var score = 0;
    //fetch user's input
    var q1 = document.forms["quizForm"] ["q1"].value;
    var q2 = document.forms["quizForm"] ["q2"].value;
    var q3 = document.forms["quizForm"] ["q3"].value;
    var q4 = document.forms["quizForm"] ["q4"].value;
    var q5 = document.forms["quizForm"] ["q5"].value;

    //check whether answers are wrong, right, or unchecked/not answered.
    //let i be question number...

    //If radio isn't selected....
    for (var i = 1; i< total; i++){
      if(eval("q" + i) == null || eval("q" + i) == ""){
        alert("Please answer question " + i);
      };
    };



  });
});

// - passed
//
// /*OBJECTIVES
// 1. Store users input in an array.
// 2. Track user's selection in a variable*/
//
// var userInput = [];
// var userSelection = [];
