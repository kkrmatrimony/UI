import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profiles-home',
  templateUrl: './profiles-home.component.html',
  styleUrls: ['./profiles-home.component.scss'],
})
export class ProfilesHomeComponent implements OnInit {
  profiles:any[] = [];
  isAdmin = false;
  constructor(private router: Router, private profileService: ProfileService, private authService: AuthService) {}
  ngOnInit(): void {   
    this.isAdmin = this.authService.isAdmin(); 
    this.profileService.getProfiles().subscribe((res) => {
      this.profiles = res;
    });
  }

  gotoProfile() {
    this.router.navigate(['/profiles/create-profile']);
  }
}
