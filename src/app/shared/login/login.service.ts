import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from './login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  login(credentials: login): Observable<any> {
    return this.http.get<any>(environment.localUrl+'login');
  }
  logout(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl+'user/logout',{
      headers: headers,
    });
  }
}
