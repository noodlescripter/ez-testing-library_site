import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  snavItem = [
    {
      title: 'EZ-TEST-LIBRARY'
    },
    {
      navItem_1: 'Available Libraries'
    },
    {
      navItem_2: 'Learn About EZ Library'
    }
    ,
    {
      navItem_3: 'Contact us'
    }
  ]

  navItems = {
    title: {
      name: 'EZ Testing Library'
    },
    navItem_1: {
      name: 'GitHub'
    },
    navItem_2: {
      name: 'Contact me'
    }
  }

}
