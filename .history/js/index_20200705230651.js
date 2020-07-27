class stopWatch {
  constructor() {
    this.UiSelectors = {
      start: ".start",
      pouse: ".pouse",
      stop: ".stop",
      restart: ".restart",
      history: ".history",
      stopw: ".stopwatch",
      time: ".time",
      timeList: ".time-list",
    };
  }
  initializeStopWatch() {
    startBtn = document.querySelector(this.UiSelectors.start);
    pouseBtn = document.querySelector(this.UiSelectors.pouse);
    stopBtn = document.querySelector(this.UiSelectors.stop);
    resetBtn = document.querySelector(this.UiSelectors.restart);
    historyBtn = document.querySelector(this.UiSelectors.history);
    StopWach = document.querySelector(this.UiSelectors.stopw);
    Time = document.querySelector(this.UiSelectors.time);
    TimeList = document.querySelector(this.UiSelectors.timeList);

    this.addEventListeners();
  }
}
