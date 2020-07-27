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
  countTime = setInterval(() => {
    console.log(seconds);
    seconds++;
  }, 1000);
};
