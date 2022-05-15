import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Our Team',
    subTitle: ''
  };


  List : any[] = [
    {
      image: './assets/images/testimonials/logo.png',
      name:"Rick Shrotri",
      designation:"Founder and Managing Partner",
      desc:"Mr. Shrotri has been a technology and telecommunications investor for over two decades, managing industry shaping investments."
    },
    {
      name:"Vasa Babic",
      designation:"Partner",
      desc:"Mr. Babic has partnered with Mr. Shrotri for 5+ years in developing the Digital Alpha concept"
    },
    {
      image: './assets/images/logo.png',
      name:"Karl Meyer",
      designation:"Managing Director, Head of Business Development and Portfolio Operations Group",
      desc:"Mr. Meyer has been a business development and operational leader in Silicon Valley at both growth stage and large companies for over two decades, during which he and Mr. Shrotri have worked together twice before."
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
