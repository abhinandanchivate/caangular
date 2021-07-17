import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profile: any = {};
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    // init
    this.profileService.getProfile().subscribe(
      (res) => {
        console.log(JSON.stringify(res));
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  }
}
