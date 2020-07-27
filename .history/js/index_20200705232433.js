class stopWatch {
  constructor() {
    this.time = null;
    this.stopw = null;
    this.countTime = null;
    this.minutes = 0;
    this.seconds - 0;

    this.UiSelectors = {
      start: ".start",
      pouse: ".pouse",
      stop: ".stop",
      restart: ".restart",
      history: ".history",
      stopw: ".stopwatch",
      time: ".time",
      timeList: ".time-list",
      info: ".info",
      modal: ".modal-shadow",
      close: ".close",
    };
  }
  initializeStopWatch() {
    this.startBtn = document.querySelector(this.UiSelectors.start);
    this.pouseBtn = document.querySelector(this.UiSelectors.pouse);
    this.stopBtn = document.querySelector(this.UiSelectors.stop);
    this.resetBtn = document.querySelector(this.UiSelectors.restart);
    this.historyBtn = document.querySelector(this.UiSelectors.history);
    this.StopWach = document.querySelector(this.UiSelectors.stopw);
    this.Time = document.querySelector(this.UiSelectors.time);
    this.TimeList = document.querySelector(this.UiSelectors.timeList);
    this.infoBtn = document.querySelector(this.UiSelectors.info);
    this.modalShadow = document.querySelector(this.UiSelectors.modal);
    this.closeModal = document.querySelector(this.UiSelectors.close);

    this.addEventListeners();
  }
  addEventListeners() {
    this.startBtn.addEventListener("click", this.StartWatch());
  }
  StartWatch() {
    this.countTime = setInterval(() => {
      console.log(seconds);
      seconds++;
    }, 1000);
  }
}
