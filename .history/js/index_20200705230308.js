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
    this.addEventListeners();
  }
}
