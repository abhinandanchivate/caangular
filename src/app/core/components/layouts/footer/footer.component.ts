import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  today: Date = new Date(); // will provide the current date time.
  // can we extract the year ?
  // do we need to display that year value on screen?

  constructor() {}

  ngOnInit(): void {}
}
