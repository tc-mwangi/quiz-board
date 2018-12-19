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
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //check whether answers are wrong, right, or unchecked/not answered.
    //let i be question number...

    //If radio isn't selected....
    for (var i = 1; i < total; i++) {
      if (eval("q" + i) == null || eval("q" + i) == "") {
        alert("Please answer question " + i);
      };
    };

    //set correct answers
    var answers = ["d", "a", "c", "a", "c"]

    //check answers
    for (var i = 1; i <= total; i++) {
      if (eval('q' + i) == answers[i - 1]) {
        score++;
      };
    };
    alert('You have scored ' + score + " / " + total);

    //display results score/total...
    var results = document.getElementById('displayResults');
    var percentScore = ((score/total)*100);

    results.innerHTML= '<h3> You scored </span>' + score + '</span> out of <span>' + total + '</span></h3>';

  });
});




//
// var percentScore = ((score/total)*100)
//
// if (percentScore === 100) {
//   var showMessage = $("#displayResults").append('Perfect Score!!! : ' + score + '/' +
//                total + '<br>' +' Percentage: '  + percentScore
//                +'%');
//   return showMessage;
//
// } else if (percentScore === 0) {
// var showMessage = $("#displayResults").append('Poor Score: ' + score + '/' +
//              questions.length + '<br>' +' Percentage: '  + percentScore
//              +'%');
// return showMessage;
// } else {
// var showMessage = $("#displayResults").append('Score : ' + score + '/' +
//              questions.length + '<br>' +' Percentage: '  + percentScore
//              +'%');
// return showMessage;
// };
