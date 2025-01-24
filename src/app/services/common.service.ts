import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(public http: HttpClient) {}

  public getReferenceData(refType: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.localUrl + 'getRef?ref_type=' + refType, {
      headers: headers,
    });
  }
}

export interface RefType {
  ref_code: string;
  ref_desc: string;
  ref_type: string;
}
