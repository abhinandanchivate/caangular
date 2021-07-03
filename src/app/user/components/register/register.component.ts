import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  error: any = {};
  // model object
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  registerSubmit() {
    console.log('hello from register submit');
    console.log(JSON.stringify(this.register));

    this.userService.registerUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
      },
      (err) => {
        console.log(JSON.stringify(err.error));
        this.error = err.error;
      }
    ); // callback
  }
}
