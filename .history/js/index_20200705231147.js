class stopWatch {
  constructor() {
    this.time = null;
    this.stopw = null;
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

    this.addEventListeners();
  }
  addEventListeners() {}
}
