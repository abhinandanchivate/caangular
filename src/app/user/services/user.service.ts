import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerData = { headers: { 'Content-Type': 'application/json' } };
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // we will do a DI via constructor.
  constructor(private httpCleint: HttpClient) {}

  registerUser(data: Register): Observable<any> {
    return this.httpCleint.post('/api/users/register', data);
  }

  login(data: any): Observable<any> {
    return this.httpCleint.post('/api/users/login', data);
  }
}
