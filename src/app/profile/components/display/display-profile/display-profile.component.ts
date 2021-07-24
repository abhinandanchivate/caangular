import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css'],
})
export class DisplayProfileComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute
  ) {}

  profile: any = {};
  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params; // destructuring
    // id = this.activatedroute.snapshot.params.id;
    console.log(id);
    this.profileService
      .getProfileDetailsByUserId(id)
      .subscribe((res) => (this.profile = res));
  }
}
