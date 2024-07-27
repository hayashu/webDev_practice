var gamePattern = [];
var userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var flag = true;
start();
function start(){
  document.addEventListener("keydown", function gameStart(){
    nextSequence();
    document.removeEventListener("keydown", gameStart);
      // userClick();
    // document.addEventListener('keydown',gameStart);
  });
}


// var randomChosenColour = buttonColours[nextSequence()];
// $("." + randomChosenColour).fadeOut(100).fadeIn(100);
// gamePattern.push(randomChosenColour);
// var buttonSound = new Audio('./sounds/' + randomChosenColour + '.mp3');
// buttonSound.play();
function userClick(){
  $("div[type='button']").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("u clicked:" + userClickedPattern);
    $("div[type='button']").off("click",arguments.callee);
    clickedSound(userChosenColour);
    animatePress(userChosenColour);
    if (gamePattern.length === userClickedPattern.length){
      answerChecker();
    }else{
      setTimeout(userClick, 100)
      // userClick();
    }
  })
}

function answerChecker(){
  console.log('worked')
  for (var i = 0; i < userClickedPattern.length; i ++){
    if (userClickedPattern[i] !== gamePattern[i]){
      flag = false;
      break;
    }
  }
  if (flag){
    level += 1;
    setTimeout(nextSequence, 1000);
    // nextSequence();
  }else{
    flag = false;
    $("h1").text("Wrong");
    var wrongButtonSound = new Audio('./sounds/wrong.mp3');
    wrongButtonSound.play();

    $("body").css('background-color', 'red');
    setTimeout(function(){
      $("body").css('background-color', '#011F3F');
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    start();
  }
}

function clickedSound(userChosenColour){
  var clickedButtonSound = new Audio('./sounds/' + userChosenColour + '.mp3');
  clickedButtonSound.play();
}
function animatePress(currentColor){
  $("." + currentColor).addClass("pressed");
  setTimeout(function(){
    $("." + currentColor).removeClass("pressed");
    // console.log(currentColor);
  },100);
}

function nextSequence(){
  
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  // return randomNumber;
  var randomChosenColour = buttonColours[randomNumber];
  $("." + randomChosenColour).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColour);
  var buttonSound = new Audio('./sounds/' + randomChosenColour + '.mp3');
  buttonSound.play();
  console.log(gamePattern);
  userClickedPattern = [];
  userClick();
}