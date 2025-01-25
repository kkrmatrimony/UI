import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [],
})
export class HomeComponent implements OnInit {
  userDetails: any;
  isAdmin = false;
  constructor(
    private as: AppService,
    private homeServive: HomeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.userDetails = JSON.parse(localStorage.getItem('user')!);    
    if (this.userDetails) {
    }
  }
}
