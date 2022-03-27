import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-counter',
  templateUrl: './our-counter.component.html'
})

export class OurCounterComponent implements OnInit {


  List: any[] = [
    {
      number: 800,
      title: 'Million AUM',
      image: './assets/images/logo.png'
    },
    {
      number: 26,
      title: 'Successful Exits',
      image: './assets/images/logo.png'
    },
    {
      number: 32,
      title: 'Portfolio Companies',
      image: './assets/images/logo.png'
    },
    {
      number: 124,
      title: 'Limited Partners',
      image: './assets/images/logo.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
