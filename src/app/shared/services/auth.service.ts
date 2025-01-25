import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;  

  constructor() { 
    
  } 

  isAuthenticatedUser(): boolean {
    return !!localStorage.getItem('user') || this.isAuthenticated;
  }

  isAdmin(): boolean {
    return JSON.parse(localStorage.getItem('user')|| '{}').user_type === 'A';
  }

  login(userRes:any){
    localStorage.setItem('user', JSON.stringify(userRes));
    this.isAuthenticated = true;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isAuthenticated = false;
  }
}