import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  flag: boolean = localStorage.token != null;
  constructor(private subjectService: SubjectService) {}
  s;

  ngOnInit(): void {
    this.subjectService.loginSubject.subscribe((res) => (this.flag = res));
    // token
    // do we have extracted token details exp time .
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    this.flag = false;
  }
}
