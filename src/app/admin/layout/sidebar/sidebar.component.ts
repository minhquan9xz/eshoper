import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import {NbIconLibraries, NbMenuService} from '@nebular/theme';

import {NbIconConfig} from '@nebular/theme/components/icon/icon.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
    },
    {
      title: 'Orders',
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
