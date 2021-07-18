import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-edu-details',
  templateUrl: './display-edu-details.component.html',
  styleUrls: ['./display-edu-details.component.css'],
})
export class DisplayEduDetailsComponent implements OnInit {
  @Input()
  education: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
