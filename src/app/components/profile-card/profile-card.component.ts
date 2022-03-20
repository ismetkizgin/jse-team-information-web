import { Component, Input, OnInit } from '@angular/core';
import { TeamMember } from '../../models';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() item!: TeamMember;
  constructor() {}

  ngOnInit(): void {}
}
