import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() { }

  teamMembers: Array<TeamMember> = [
    {
      firstName: 'İsmet',
      lastName: 'Kizgin',
      imgUrl: 'assets/images/ismetkizgin.jpg',
      title: 'Team Leader & Full Stack Developer',
      socialAccounts: [
        {
          iconClass: 'fa fa-github',
          link: 'https://github.com/ismetkizgin',
        },
        {
          iconClass: 'fa fa-linkedin',
          link: 'https://www.linkedin.com/in/ismetkizgin/',
        },
        {
          iconClass: 'fa fa-link',
          link: 'https://ismetkizgin.com.tr',
        },
        {
          iconClass: 'fa fa-instagram',
          link: 'https://instagram.com/ismetkizgin',
        },
      ],
    },
    {
      firstName: 'Mehmet Ayberk',
      lastName: 'Çakar',
      imgUrl: 'assets/images/ayberkcakar.png',
      title: 'Full Stack Developer',
      socialAccounts: [
        {
          iconClass: 'fa fa-github',
          link: 'https://github.com/AyberkCakar',
        },
        {
          iconClass: 'fa fa-linkedin',
          link: 'https://www.linkedin.com/mwlite/in/ayberkcakar',
        },
        {
          iconClass: 'fa fa-link',
          link: 'https://www.ayberkcakar.com',
        },
        {
          iconClass: 'fa fa-instagram',
          link: 'https://www.instagram.com/ayberkcakar/',
        },
      ],
    },
    {
      firstName: 'Furkan',
      lastName: 'Söğüt',
      imgUrl: 'assets/images/furkansogut.jpg',
      title: 'Frontend Developer',
      socialAccounts: [
        {
          iconClass: 'fa fa-github',
          link: 'https://github.com/frknsgt',
        },
        {
          iconClass: 'fa fa-linkedin',
          link: 'https://www.linkedin.com/in/furkan-sogut/',
        },
        {
          iconClass: 'fa fa-instagram',
          link: 'https://instagram.com/frknsgt',
        },
      ],
    },
    {
      firstName: 'Kadir Can',
      lastName: 'Karademir',
      imgUrl: 'assets/images/kadircankarademir.jpg',
      title: 'Backend Developer',
      socialAccounts: [
        {
          iconClass: 'fa fa-github',
          link: 'https://github.com/CanKadirKarademir',
        },
        {
          iconClass: 'fa fa-linkedin',
          link: 'https://www.linkedin.com/in/kadircankarademir/',
        },
        {
          iconClass: 'fa fa-instagram',
          link: 'https://www.instagram.com/cankadirkarademir/',
        },
      ],
    },
  ];

  ngOnInit(): void { }
}
