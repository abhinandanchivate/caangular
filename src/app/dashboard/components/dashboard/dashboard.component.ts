import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profile: any = {};
  error: any = {};
  username: string;
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('userDetails')).name;
    console.log(this.username);
    // init
    this.profileService.getProfile().subscribe(
      (res) => {
        this.profile = res;
        console.log(JSON.stringify(res));
      },
      (err) => {
        this.profile = null;
        console.log(JSON.stringify(err.error));
        this.error.noprofile = err.error.noprofile;
        if (err.error.status == '401') {
          this.router.navigate(['/user/login']);
        }
      }
    );
  }
}
