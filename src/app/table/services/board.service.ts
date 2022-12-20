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
    return this._http.get<any>('api/board/1');
  }

  public deleteBoard(id: any): Observable<any> {
    return this._http.delete<any>(`api/board/${id}`);
  }

  public addBoard(title: any, user_id: any, items_id: any): Observable<any> {

    return this._http.post<any>(`/api/board/`, {title: title, items_id: items_id, user_id: user_id})
  }
}
