import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  // model object
  constructor() {}

  ngOnInit(): void {}

  registerSubmit() {
    console.log('hello from register submit');
    console.log(JSON.stringify(this.register));
  }
}
