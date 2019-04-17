import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, } from '@angular/common/http';
import { UserDAO, IUserDAO } from '../models/user.model';


@Injectable({ providedIn: 'root' })

export class RegisterService {

    private postUrl = ' ' + 'api/user';
    constructor(private http: HttpClient) {

    }

    create(user: any): Observable<HttpResponse<IUserDAO>> {
        return this.http.post<IUserDAO>(this.postUrl, user, { observe: 'response' });
    }

    find(name: string): Observable<HttpResponse<IUserDAO>>{
        return this.http.get<IUserDAO>(`${this.postUrl}/${name}`,{observe: 'response'})
      }
    
}