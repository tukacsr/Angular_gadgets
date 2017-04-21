import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './001_PricingCalculator.component.html',
  styleUrls: ['./001_PricingCalculator.component.scss']
})

export class PricingCalculatorComponent implements OnInit {
  price: number;
  quantity: number;
  cost: number;

  constructor() { }

  ngOnInit() {
    this.price = 1;
    this.quantity = 1;
  }

}
