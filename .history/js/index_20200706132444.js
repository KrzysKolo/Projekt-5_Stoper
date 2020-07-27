const startBtn = document.querySelector(".start");
const pouseBtn = document.querySelector(".pouse");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".restart");
const historyBtn = document.querySelector(".history");
const StopWach = document.querySelector(".stopwatch");
const Time = document.querySelector(".time");
const TimeList = document.querySelector(".time-list");
const infoBtn = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModal = document.querySelector(".close");

let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {
  clearInterval(countTime);
  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      StopWach.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      StopWach.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      StopWach.textContent = `${minutes}:00`;
    }
  }, 1000);
};
const handlePause = () => {
  clearInterval(countTime);
};

startBtn.addEventListener("click", handleStart);
