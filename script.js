let timer;
let isRunning = false;
let seconds = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startStop").innerHTML = "Start";
  } else {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
    document.getElementById("startStop").innerHTML = "Stop";
  }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}

function updateTimer() {
  seconds++;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;
  document.getElementById("display").innerHTML = 
    `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${sec < 10 ? '0' + sec : sec}`;
}
