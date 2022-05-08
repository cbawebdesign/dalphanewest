import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-blog-two-column',
  templateUrl: './blog-two-column.component.html',
})
export class BlogTwoColumnComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Our Portfolio",
  };
  grid : string = "6";

  List: any[] = [
    {
      img: './assets/images/partners/g.jpg',
      name:  'Google Station',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: ' Google Station announcement at Mobile World Congress Barcelona',
    },
    {
      img: './assets/images/partners/p.png',
      name:  'Packet Fabric',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/9.png',
      name:  'Qwilt',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing',
    },
    {
      img: './assets/images/partners/4.png',
      name:  'Jet Stream Software',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/5.png',
      name:  'SHARE CARE',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/6.png',
      name:  'CONNEXIN',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/7.png',
      name:  'PRYON',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/8.png',
      name:  'QUILT',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/05.png',
      name:  'CSS',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    }
  ];
  
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
