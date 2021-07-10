import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('hello from token interceptor');
    // can we write code to validate the token?

    console.log(request.url);
    const token = localStorage.getItem('token');
    if (request.url.includes('login') || request.url.includes('register')) {
      console.log('inside url if condition');
      return next.handle(request);
    } else if (token != null) {
      console.log('inside the else if token check condition');
      request = request.clone({
        headers: request.headers.set('authorization', token),
      });
      return next.handle(request);
    } else return next.handle(request);
  }
}
