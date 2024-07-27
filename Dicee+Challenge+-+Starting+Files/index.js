var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").attributes[1].textContent = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").attributes[1].textContent = "./images/dice" + randomNumber2 + ".png";

var resultText;
if (randomNumber1 > randomNumber2){
  resultText = "👑Player 1 Win";
} else if (randomNumber1 < randomNumber2){
  resultText = "Player 2 Win👑";
} else{
  resultText = "Draw";
}

document.querySelector("h1").textContent = resultText;