import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html'
})
export class OurClientComponent implements OnInit {

  List : any[] = [
    {
      img:  '1.png',
    },
    {
      img:  '2.png',
    },
    {
      img:  '3.png',
    },
    {
      img:  '4.png',
    },
    {
      img:  '5.png',
    },
    {
      img:  '6.png',
    },
    {
      img:  '7.png',
    },
    {
      img:  '8.png',
    }
  ];
  hover : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
