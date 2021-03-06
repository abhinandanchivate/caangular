import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  loginSubject: Subject<boolean> = new Subject();

  constructor() {}
}
