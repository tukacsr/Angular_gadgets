import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './003_DharmaTimer.component.html',
  styleUrls: [`./003_DharmaTimer.component.css`]
})

export class DharmaTimerComponent implements OnInit {
  interval: any;
  timerTime = 30;
  minutes: string;
  seconds: string;
  isRunning: boolean;

  constructor() { }

  ngOnInit() {
    const startButton = document.querySelector('[data-action="start"]');
    const stopButton = document.querySelector('[data-action="stop"]');
    const resetButton = document.querySelector('[data-action="reset"]');

    startButton.addEventListener('click', this.startTimer);
    stopButton.addEventListener('click', this.stopTimer);
    resetButton.addEventListener('click', this.resetTimer);

    this.minutes = '108';
    this.seconds = '00';

    const timer = document.getElementById('timer');
    timer.style.fontSize = '140px';
    timer.style.backgroundColor = 'white';

    this.startClock();
  }

  decrementTimer = () => {
    this.timerTime--;
    if (this.timerTime === 0) {
      clearInterval(this.interval);
      this.con();
    } else {
      const numOfMinutes = Math.floor(this.timerTime / 60);
      const numOfSeconds = this.timerTime % 60;

      this.minutes = String(numOfMinutes);
      this.seconds = String(numOfSeconds);
    }
  }

  con = () => {
    const timer = document.getElementById('timer');
    timer.style.backgroundColor = 'red';
    const resetBtn = document.getElementById('btn-reset');
    resetBtn.style.display = 'none';

    setTimeout(() => {
      this.minutes = '☣🙈✈';
      this.seconds = '🐍☠';
    }, 500);
    setTimeout(() => {
      this.minutes = '✈☠☣';
      this.seconds = '🙈🐍';
    }, 1000);
    setTimeout(() => {
      this.minutes = '☣☠🐍';
      this.seconds = '✈🙈';
    }, 1500);
    setTimeout(() => {
      this.minutes = '🐍✈☣';
      this.seconds = '☠🙈';
    }, 2000);
    setTimeout(() => {
      this.minutes = '🙈✈☠';
      this.seconds = '☣🐍';
    }, 2500);
    setTimeout(() => {
      timer.style.backgroundColor = 'white';
      resetBtn.style.display = 'block';
      this.startClock();
    }, 5000);
  }

  startTimer = () => {
    if (this.isRunning) return;

    this.startClock();
  }

  stopTimer = () => {
    if (!this.isRunning) return;

    this.isRunning = false;
    clearInterval(this.interval);
  }

  resetTimer = () => {
    this.stopTimer();
    this.startClock();
  }

  startClock = () => {
    this.timerTime = 6480;
    this.minutes = '108';
    this.seconds = '00';
    this.isRunning = true;
    this.interval = setInterval(this.decrementTimer, 1000);
  }
}
