'use strict';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './002_CrazyButtons.component.html',
  styleUrls: ['./002_CrazyButtons.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})


export class CrazyButtonsComponent implements OnInit {
  cnt: HTMLElement;
  score = 0;
  footer = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const list = document.getElementsByClassName('btn-crazy');
    Array.from(list).forEach(button => button.addEventListener('mouseover', this.goCrazy));
    Array.from(list).forEach(button => button.addEventListener('click', this.gotClicked));
  }

  goCrazy = (e) => {
    this.footer = true;

    const button = e.target;

    const cnt = document.getElementById('container');
    cnt.style.height = '80vh';
    cnt.style.width = '75%';
    cnt.style.margin = 'auto';

    const hd = document.getElementById('header');

    const offsetTop = Math.random() * (cnt.clientHeight - button.clientHeight) + hd.clientHeight;
    const offsetLeft = Math.random() * (cnt.clientWidth);

    button.style.top = offsetTop + 'px';
    button.style.left = offsetLeft + 'px';

    button.innerText = 'Haha';

    setTimeout(function(){
      button.innerText = '';
    }, 600);
  }

  gotClicked = (e) => {
    this.score++;
    if (this.score <= 5) {
      e.path[0].remove();
    }
  }

  onResize(event){
     location.reload();
   }
}
