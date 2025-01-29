import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;  
  private isAdminSubject = new BehaviorSubject(false);
  public isAdmin$ = this.isAdminSubject.asObservable();
  public isAdmin = false;

  constructor() { 
    
  } 

  isAuthenticatedUser(): boolean {
    return !!localStorage.getItem('user') || this.isAuthenticated;
  }
  

  login(userRes:any){
    localStorage.setItem('user', JSON.stringify(userRes));
    this.isAuthenticated = true;
    console.log(JSON.parse(localStorage.getItem('user')|| '{}').user_type === 'A');
    if(JSON.parse(localStorage.getItem('user')|| '{}').user_type === 'A'){
    this.isAdminSubject.next(true)
    }else {
      this.isAdminSubject.next(false);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isAuthenticated = false;
    this.isAdminSubject.next(false);
    
  }
}