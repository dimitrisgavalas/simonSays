

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
z

//
//
//
// // function randomNumberGenerator(){
// //   //generate random number. It will choose next box
// //   return Math.floor(Math.random() * 4 + 1); //1-4
// // }
//
//
//
// function boxChooser() {
//
//   var randomNumber = Math.floor(Math.random() * 4 + 1); //1-4
//   switch (randomNumber) {
//     case 1: //green
//       //$("green").
//       var greenSound = new Audio("sounds/green.mp3");
//       greenSound.play();
//       $("#green").fadeOut(100).fadeIn(100);
//       break;
//     case 2: //red
//       var redSound = new Audio("sounds/red.mp3");
//       redSound.play();
//       $("#red").fadeOut(100).fadeIn(100);
//       break;
//     case 3: //yellow
//       var yellowSound = new Audio("sounds/yellow.mp3");
//       yellowSound.play();
//       $("#yellow").fadeOut(100).fadeIn(100);
//     case 4: //blue
//       var blueSound = new Audio("sounds/blue.mp3");
//       blueSound.play();
//       $("#blue").fadeOut(100).fadeIn(100);
//       break;
//     default:
//       var wrongSound = new Audio("sounds/wrong.mp3");
//       wrongSound.play();
//       //$("body").css({"background-color:" "red"});
//   }
// }
//
// //
// // //when we click any button it will animate h1
// // $("h1").on("click", function() {
// //   // $("h1").toggle();
// //   //$("h1").hide();
// //   //$("h1").show();
// //   // $("h1").show();
// //   // $("h1").hide();
// //   // $("h1").fadeOut();
// //   // $("h1").fadeIn();
// //   // $("h1").fadeToggle();
// //   // $("h1").slideIn();
// //   // $("h1").slideOut();
// //   // $("h1").slideDown();
// //   // $("h1").slideUp();
// //   // $("h1").animate({opacity: 0.5});
// //   $("h1").slideUp().slideDown().animate({opacity: 0.5});
// // });
