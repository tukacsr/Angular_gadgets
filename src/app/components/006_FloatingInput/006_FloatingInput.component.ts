import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './006_FloatingInput.component.html',
  styleUrls: [`./006_FloatingInput.component.scss`]
})

export class FloatingInputComponent implements OnInit {
  bg: any;

  constructor() { }

  ngOnInit() {
    this.bg = document.querySelector('.background');;
    const input = document.querySelector('input[type=text]');
    const overlay = document.querySelector('.overlay');

    input.addEventListener('focusin', this.showFloater);
    input.addEventListener('focusout', this.closeFloater);
  }

  showFloater = () => {
    this.bg.classList.add('show-floater');
  }

  closeFloater = () => {
    if (this.bg.classList.contains('show-floater')) {
      this.bg.classList.remove('show-floater');
    }
  }
}
