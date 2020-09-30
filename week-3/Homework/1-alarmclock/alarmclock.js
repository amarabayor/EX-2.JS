function setAlarm(){
  let startButton=document.getElementById("set")
  let inputArea=document.getElementById("alarmSet")
  let timeRemain2=document.getElementById("timeRemaining")
  let pause=document.getElementById("pause")
  let newnumber=inputArea.value
  let counter=newnumber
  //let counter=newnumber
  function timer(counter){
    if(counter>0){
       counter=counter-1;
       setTimeout(function(){
        timer(counter)
        }, 1000)
      console.log(counter)
      if(counter<10){
        timeRemain2.innerText="Time remaining is 00:0"+counter
      }
      else{
        timeRemain2.innerText="Time remaining is 00:"+counter
      }
    }
    else if(counter<1){
      playAlarm()
    }
  }
  timer(counter);
  function pauseTimer(){
    document.getElementById("stop").addEventListener("click", () => {
      counter=counter;
    });
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
