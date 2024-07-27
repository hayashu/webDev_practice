// document.querySelectorAll("button").addEventListener("click", handleClick);
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  // document.querySelectorAll("drum")[i].addEventListener("keydown", handleClick);
}
const d = {
  'w' : 'tom-1',
  'a' : 'tom-2',
  's' : 'tom-3',
  'd' : 'tom-4',
  'j' : 'crash',
  'k' : 'kick-bass',
  'l' : 'snare'
};
document.addEventListener("keydown", function(event){
  // console.log(event.key);
  if (Object.keys(d).includes(event.key)){
    var audioPath = "./sounds/" + d[event.key] +  ".mp3"
    var audio = new Audio(audioPath);
    audio.play();
    buttonAnimation(event.key);
  }
});

function handleClick(){
  // alert('Clicked');
  // console.log(this.textContent);
  // this.style.color = 'white';
  var audioPath = "./sounds/" + d[this.textContent] +  ".mp3"
  var audio = new Audio(audioPath);
  audio.play();
  buttonAnimation(this.textContent);
}

function buttonAnimation(currentKey){
  var pressedButton = document.querySelector("." + currentKey);
  pressedButton.classList.add("pressed");
  setTimeout(function(){
    pressedButton.classList.remove("pressed")
  },200);
}
