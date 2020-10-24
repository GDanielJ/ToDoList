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

  getItems(id: number): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(this.baseUrl + 'user/' + id + '/list', httpOptions);
  }

}
