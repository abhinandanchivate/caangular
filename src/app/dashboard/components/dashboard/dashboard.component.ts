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

  deleteExp($event) {
    console.log('inside the dashboard deleteExp');
    let count = $event;
    console.log('recieved value' + $event);
    this.profileService.deleteExperience($event).subscribe(
      (res) => {
        this.profile = res;
      },
      (err) => {}
    );
  }

  deleteProfile() {
    // it should hit the rest api
    this.profileService.deleteProfile().subscribe((res) => {
      // it should clear localstorage
      localStorage.clear();
      // it should take you to LandingComponent.
      this.router.navigate(['']);
    });
  }
}
