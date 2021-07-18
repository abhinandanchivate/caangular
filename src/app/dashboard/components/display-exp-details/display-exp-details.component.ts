import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-display-exp-details',
  templateUrl: './display-exp-details.component.html',
  styleUrls: ['./display-exp-details.component.css'],
})
export class DisplayExpDetailsComponent implements OnInit {
  @Input()
  exp: any[] = [];
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    console.log(JSON.stringify(this.exp));
  }
  deleteExp(id: string) {
    console.log(id);
    this.profileService.deleteExperience(id).subscribe(
      (res) => {
        this.router.navigate(['/dashboard']);
      },
      (err) => {}
    );
  }
}
