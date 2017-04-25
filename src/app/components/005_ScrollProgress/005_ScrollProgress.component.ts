import { Component, OnInit } from '@angular/core';
import * as _debounce from 'lodash.debounce';

@Component({
  templateUrl: './005_ScrollProgress.component.html',
  styleUrls: [`./005_ScrollProgress.component.scss`]
})

export class ScrollProgressComponent implements OnInit {
  scrollLine: any;

  constructor() { }

  ngOnInit() {
    this.scrollLine = document.querySelector('.scroll-line');

    window.addEventListener('scroll', _debounce(this.fillScrollLine, 50));
  }

  fillScrollLine = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

    this.scrollLine.style.width = `${percentScrolled}%`;
  }
}
