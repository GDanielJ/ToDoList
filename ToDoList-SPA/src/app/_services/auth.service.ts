import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';

  constructor(private http: HttpClient) { }

  register(model: any) { // TODO - byt ut model mot User här när user är klar!
    return this.http.post(this.baseUrl + 'register', model);
  }
}
