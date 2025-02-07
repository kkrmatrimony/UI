import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-subscriber-home',
  templateUrl: './subscriber-home.component.html',
  styleUrls: ['./subscriber-home.component.scss']
})
export class SubscriberHomeComponent implements OnInit {
  
  myProfiles=[];
  //last7dayscreatedprofiles=[];
  constructor(private homeService:HomeService){

  }

  ngOnInit(): void {
    this.homeService.profilesBySubscriberId().subscribe((res) => {
      this.myProfiles = res;
    });
    // this.profileService.getProfiles(GetProfile.LAST7DAYSCREATION).subscribe((res) => {
    //   this.last7dayscreatedprofiles = res;
    // });
  }



}
