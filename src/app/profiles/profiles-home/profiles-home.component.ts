import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profiles-home',
  templateUrl: './profiles-home.component.html',
  styleUrls: ['./profiles-home.component.scss'],
})
export class ProfilesHomeComponent implements OnInit {
  profiles:any[] = [];
  constructor(private router: Router, private profileService: ProfileService) {}
  ngOnInit(): void {
    console.log('hi');
    this.profileService.getProfiles().subscribe((res) => {
      this.profiles = res;
    });
  }

  gotoProfile() {
    this.router.navigate(['/profiles/create-profile']);
  }
}
