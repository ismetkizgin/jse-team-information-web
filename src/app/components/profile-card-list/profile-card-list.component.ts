import { Component, Input, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models';

@Component({
  selector: 'app-profile-card-list',
  templateUrl: './profile-card-list.component.html',
  styleUrls: ['./profile-card-list.component.scss'],
})
export class ProfileCardListComponent implements OnInit {
  constructor() {}
  @Input() items!: Array<TeamMember>;

  ngOnInit(): void {}
}
