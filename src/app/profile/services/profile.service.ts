import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = '/api/profile';

  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  createProfile(profile: Profile): Observable<any> {
    return this.httpClient.post(this.api, profile);
  }

  deleteExperience(id: string): Observable<any> {
    return this.httpClient.delete(this.api + '/experience/' + id);
  }
  deleteProfile(): Observable<any> {
    return this.httpClient.delete(this.api);
  }
  getProfiles(): Observable<any> {
    return this.httpClient.get(this.api + '/all');
  }

  getProfileDetailsByUserId(userId: string): Observable<any> {
    return this.httpClient.get('api/profile/user/' + userId);
  }
}
