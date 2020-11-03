import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ListItem } from '../_models/list-item';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListItemService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getItem(userId: number, id: number) {
    return this.http.get<ListItem>(this.baseUrl + 'user/' + userId + '/list/' + id, httpOptions);
  }

  getItems(userId: number): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(this.baseUrl + 'user/' + userId + '/list', httpOptions);
  }

  updateItem(userId: number, id: number, listItem: ListItem) {
    return this.http.put<ListItem>(this.baseUrl + 'user/' + userId + '/list/' + id, listItem, httpOptions);
  }

  deleteListItem(userId: number, id: number) {
    return this.http.delete<ListItem>(this.baseUrl + 'user/' + userId + '/list/' + id, httpOptions);
  }
}
