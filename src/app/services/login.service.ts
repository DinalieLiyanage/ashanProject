import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDAO } from '../models/user.model';
import { HttpResponse, HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  dataPassingURL = ' ' + 'api/user';
  constructor(
    private http: HttpClient
  ) { }

  getCreator(username: string): Observable<HttpResponse<IUserDAO>> {
    return this.http.get<IUserDAO>(`${this.dataPassingURL}/${username}`, { observe: 'response' });
  }

}
