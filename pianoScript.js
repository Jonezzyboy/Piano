function loadPiano(){
  var piano = document.getElementById("piano-keyboard");
  piano.addEventListener('mousedown', notePressed, true);
}

function notePressed(event){
  var key = event.target

  //Use for assigning correct sound
  var noteValue = key.getAttribute("data-piano-key");

  var colourClass = key.getAttribute("class");
  changeColour(key, "lightgrey");
  playSound(noteValue);
  key.addEventListener('mouseout', noteReleased, true);
  key.addEventListener('mouseup', noteReleased, true);
}

function noteReleased(event){
  var key = event.target
  var colour = key.getAttribute("class");
  if(colour == "piano-key white-key"){
    changeColour(key, "#FFFFF7");
  }else{
    changeColour(key, "#000000");
  }
}

function playSound(noteValue){
  var audio = new Audio('audio/'+ noteValue +'.wav');
  audio.play();
}

function changeColour(target, colour){
  target.style.fill=colour
}
