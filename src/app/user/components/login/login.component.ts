import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import jwt_decode from 'jwt-decode';
import { SubjectService } from 'src/app/shared/services/subject.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = {};
  error: any = {};
  constructor(
    private userService: UserService,
    private router: Router,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {}
  loginSubmit() {
    this.userService.login(this.login).subscribe(
      (data) => {
        console.log('data is ' + JSON.stringify(data));
        localStorage.setItem('token', data.token);
        // can we decode thetoken here?
        let decodedValue = jwt_decode(data.token);
        localStorage.setItem('userDetails', JSON.stringify(decodedValue));
        // can we store the decoded value in LS?

        // set the login flag
        this.subjectService.loginSubject.next(true);
        // to shift our user to dashboard page.
        this.router.navigate(['/dashboard/']);
      },
      (err) => {}
    );
  }
}
