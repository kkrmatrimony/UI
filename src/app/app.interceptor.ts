import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppService } from './app.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private appService: AppService) {}  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(req.url.includes('logout') || req.url.includes('add-to-cart') || (req.url.includes('my-cart'))){
      if(JSON.parse(localStorage.getItem('user')!)){
        let token = JSON.parse(localStorage.getItem('user')!)?.token;
        req =  req.clone({
            headers: req.headers.set('Authorization', token)
          });
      }     
    }    
    //this.appService.setLoading(true);
    return next.handle(req).pipe(
        tap(
          event => {
            //logging the http response to browser's console in case of a success
            if (event instanceof HttpResponse) {
              //console.log("api call success :", event);
             // this.appService.setLoading(false);
            }
          },
          error => {
            //this.appService.setLoading(false);
            //logging the http response to browser's console in case of a failuer
            if (event instanceof HttpResponse) {
              console.log("api call error :", event);
              
            }
          }
        )
      );
  }
}
