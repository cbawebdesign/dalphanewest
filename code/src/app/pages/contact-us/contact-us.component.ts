import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Contact us",
    img:"logo.png"
  };

  List : any[] =[
    {
      title:"USA Office",
      address:""
    },
    // {
    //   title:"Australia Office",
    //   address:""
    // },
    // {
    //   title:"New zealand Office",
    //   address:""
    // }

  ]

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
