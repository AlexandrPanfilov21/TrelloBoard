import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private _http: HttpClient,
  ) { }

  public getBoard(): Observable<any> {
    return this._http.get<any>('api/board/');
  }

  public deleteBoard(id: any): Observable<any> {
    return this._http.delete<any>(`api/board/${id}`);
  }

  public addBoard(title: any): Observable<any> {

    return this._http.post<any>('/api/board/', title)
  }
}
