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
      img:"1.jpg",
      name:"Rick Shrotri",
      designation:"Founder and Managing Partner",
      desc:"Mr. Shrotri has been a technology and telecommunications investor for over two decades, managing industry shaping investments."
    },
    {
      img:"2.jpg",
      name:"Vasa Babic",
      designation:"Partner",
      desc:"Mr. Babic has partnered with Mr. Shrotri for 5+ years in developing the Digital Alpha concept"
    },
    {
      img:"3.jpg",
      name:"Andy Alcon",
      designation:"CFO",
      desc:"Mr. Alcon has been CFO for Digital Alpha since inception."
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
