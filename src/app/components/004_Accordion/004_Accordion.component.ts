import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './004_Accordion.component.html',
  styleUrls: [`./004_Accordion.component.scss`]
})

export class AccordionComponent implements OnInit {
  texts: Array<object>;

  constructor() { }

  ngOnInit() {
    this.texts = [];
    const qs = ['First question', 'Second question', 'Third question'];
    const as = ['First answer', 'Second answer', 'Third answer'];

    for (let i = 0; i < qs.length; i++) {
      const qplusa = {q: qs[i], a: as[i]};
      this.texts[i] = qplusa;
    }
  }
}
