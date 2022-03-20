import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  teamMembers: Array<TeamMember> = [
    {
      firstName: 'İsmet',
      lastName: 'Kizgin',
      imgUrl: 'assets/images/ismetkizgin.jpg',
      title: 'Team Leader & Full Stack Developer',
      socialAccounts: [
        {
          iconClass: 'fa fa-instagram',
          link: 'https://instagram.com/ismetkizgin',
        },
      ],
    },
    {
      firstName: 'İsmet',
      lastName: 'Kizgin',
      imgUrl: 'assets/images/ismetkizgin.jpg',
      title: 'Team Leader & Full Stack Developer',
      socialAccounts: [
        {
          iconClass: 'fa fa-instagram',
          link: 'https://instagram.com/ismetkizgin',
        },
      ],
    },
    {
      firstName: 'İsmet',
      lastName: 'Kizgin',
      imgUrl: 'assets/images/ismetkizgin.jpg',
      title: 'Team Leader & Full Stack Developer',
      socialAccounts: [
        {
          iconClass: 'fa fa-instagram',
          link: 'https://instagram.com/ismetkizgin',
        },
      ],
    },
    {
      firstName: 'İsmet',
      lastName: 'Kizgin',
      imgUrl: 'assets/images/ismetkizgin.jpg',
      title: 'Team Leader & Full Stack Developer',
      socialAccounts: [
        {
          iconClass: 'fa fa-instagram',
          link: 'https://instagram.com/ismetkizgin',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
