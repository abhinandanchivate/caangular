import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output('deleteExp')
  expIdValue: EventEmitter<string> = new EventEmitter<string>();
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    console.log(JSON.stringify(this.exp));
  }
  deleteExperience(id: string) {
    console.log(id);
    this.expIdValue.emit(id);
  }
}
