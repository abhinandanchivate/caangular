import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
})
export class ProfileHeaderComponent implements OnInit {
  @Input('location')
  location: string;
  @Input('status')
  status: string;
  @Input('company')
  company: string;
  @Input('name')
  name: string;
  constructor() {}

  ngOnInit(): void {}
}
