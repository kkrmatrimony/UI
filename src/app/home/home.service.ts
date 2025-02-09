import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { Config } from '../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(public http: HttpClient) {}

  public getProfiles(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.localUrl + 'getprofiles', {
      headers: headers,
    });
  }

  public profilesBySubscriberId(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      environment.localUrl + 'getprofilesBySubscriberId',
      {
        subscriber_id: 'KKKR00002',
      },
      { headers: headers }
    );
  }

  public matchProfiles(params:any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.localUrl + 'matchprofiles',params,
      { headers: headers})
  }
}
