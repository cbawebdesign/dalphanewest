import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Digital Alpha',
    subTitle: 'Investing in the digital future'
  };
  
  List: any[] = [
    {
      title: 'Next Gen Networks',
      subtitle: 'Digital Alpha Advisors LLC information information information information information information',
      image: './assets/images/image.jpg'
    },
    {
      title: 'Cloud',
      subtitle: 'Digital Alpha Advisors LLC information information information information information information',
      image: './assets/images/image.jpg'
    },
    {
      title: 'Internet of Things',
      subtitle: 'Digital Alpha Advisors LLC information information information information information information',
      image: './assets/images/image.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
