import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html'
})
export class PartnerComponent implements OnInit {

  List: any[] = [
    {
      title: 'UK Cloud',
      subtitle: '.',
      image: './assets/images/partners/1.png'
    },
    {
      title: 'JetStream',
      subtitle: '.',
      image: './assets/images/partners/3.png'
    },
    {
      title: 'British Telecom',
      subtitle: '.',
      image: './assets/images/partners/4.png'
    },
    {
      title: 'Working Group Two',
      subtitle: '.',
      image: './assets/images/partners/2.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
