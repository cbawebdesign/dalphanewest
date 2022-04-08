import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})
export class SolutionsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Responsibility',
    subTitle: 'Social Responsibility'
  };

  List: any[] = [
    {
      id: 'tab-one-platform',
      title: 'Impact ',
      desc: [
        '',
        '',
      ],
      active: true
    },
    {
      id: 'tab-time-value',
      title: 'Time value',
      desc: [
        '',
        '',
      ]
    },
    {
      id: 'tab-smart-work',
      title: 'Smart work',
      desc: [
        '',
        '',
        '',
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tab-content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }
}
