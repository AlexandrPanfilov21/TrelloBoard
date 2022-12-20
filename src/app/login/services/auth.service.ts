import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient,
  ) { }

  public registerUser(username: any, password: any): Observable<any>{
    return this._http.post<any>('/api/auth/users/', { username: username, password: password });
  }

  public loginUser(username: any, password: any): Observable<any>{
    return this._http.post<any>('/auth/token/login/', { username: username, password: password });
  }
}
