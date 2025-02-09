import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Profile } from 'src/app/shared/models/profile';
import { CommonService, RefType } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-subscriber-home',
  templateUrl: './subscriber-home.component.html',
  styleUrls: ['./subscriber-home.component.scss'],
})
export class SubscriberHomeComponent implements OnInit {
  myProfiles = [];
  isAdmin: boolean = false;
  showMatchTable = false;
  profile!: Profile;  

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    
    this.homeService.profilesBySubscriberId().subscribe((res) => {
      this.myProfiles = res;
    });
    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    
  }

  matchEmitter(profile: any) {
    this.showMatchTable = true;
    this.profile = profile;
  }

  // changeSect(sect: string) {
  //   this.commonService.getReferenceData(sect).subscribe((subsect) => {
  //     this.subsectList = subsect;
  //   });
  // }
}
