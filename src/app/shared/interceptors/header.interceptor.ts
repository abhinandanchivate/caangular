import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('inside the http interceptor');

    if (request.headers.has('Content-Type')) {
      console.log('inside if condition from the httpinterceptor');
      return next.handle(request);
    }
    request = request.clone({
      headers: request.headers.set('Content-Type', 'application/json'),
    }); // exsiting object + new add on things will be added in new object & will be returned.
    return next.handle(request);
  }
}
