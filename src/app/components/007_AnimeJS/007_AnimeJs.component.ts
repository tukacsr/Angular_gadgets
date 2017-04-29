import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import anime from 'animejs'

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './007_AnimeJs.component.html',
  styleUrls: [`./007_AnimeJs.component.css`]
})

export class AnimeJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const logoAnimation = anime.timeline({
      direction: 'alternate',
      loop: true
    });

    logoAnimation.add([
      {
        targets: '.text-fills path',
        opacity: [0, 1],
        fill: '#18981E',
        easing: 'easeInSine',
        duration: 2000,
        delay: (t, i) => 1300 + (anime.random(0, 450)),
        offset: 0
      },
      {
        targets: '.line',
        translateX: (target) => {
          let x = 1000;
          let translate;
          if (target.classList.contains('hori')) translate = anime.random(0, 1) ? x : -x;
          if (target.classList.contains('diag-right') || target.classList.contains('diag-left')) translate =  x / 3;
          return [translate, 0];
        },
        translateY: (target) => {
          let y = 1000;
          let translate;
          if (target.classList.contains('vert')) translate = anime.random(0, 1) ? y : -y;
          if (target.classList.contains('diag-right')) translate =  -y / 3;
          if (target.classList.contains('diag-left')) translate =  y / 3;
          return [translate, 0];
        },
        scale: {
          value: [5, 1],
          duration: 1500,
        },
        stroke: '#18981E',
        opacity: {
          value: [0, 1]
        },
        delay: (t, i) => (i * 25),
        duration: 500,
        easing: 'easeOutSine',
        offset: 0
      }
    ]);
  }

}
