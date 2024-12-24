import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'raattai_ui';
  constructor(private as:AppService){

  }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('user')?true:false;
    this.as.setLogin(isLoggedIn);
  }
}
