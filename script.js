var selectedTime = 0;
var reloadCounter = 0;
function thirtySec() {
  selectedTime = 30;
  document.getElementById('timerValue').innerHTML = selectedTime;
  document.getElementById('timerValue2').innerHTML = selectedTime;
}

function sixtySec() {
  selectedTime = 60;
  document.getElementById('timerValue').innerHTML = selectedTime;
  document.getElementById('timerValue2').innerHTML = selectedTime;
}


function fiveMin() {
  selectedTime = 300;
  document.getElementById('timerValue').innerHTML = selectedTime;
  document.getElementById('timerValue2').innerHTML = selectedTime;
}


function tenMin() {
  selectedTime = 600;
  document.getElementById('timerValue').innerHTML = selectedTime;
  document.getElementById('timerValue2').innerHTML = selectedTime;
}


var timeleft = selectedTime;
// var downloadTimer x= setInterval(function (){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//   }
//   document.getElementById("progressBar").value = 10 - timeleft;
//   timeleft -= 1;
// }, 1000);

function timerEnd() {
  const music = new Audio('mixkit-manual-siren-fire-alert-1652.wav');
  music.play();
  music.loop =true;
  music.playbackRate = 2;
  alert("Bomb's Away")
}

function timerStop() {
  window.location.reload()
}

function startTimer() {
  reloadCounter += 1;
  
  var downloadTimer = setInterval(function (){
  if(selectedTime <= 0){
    timerEnd()
    clearInterval(downloadTimer);
  }
  if (reloadCounter == 1) {
    document.getElementById('timerValue').innerHTML = selectedTime;
    document.getElementById('timerValue2').innerHTML = selectedTime;
    selectedTime -= 1;
  }
  }, 1000);
  if (reloadCounter > 1) {
    window.location.reload()
  }
};
