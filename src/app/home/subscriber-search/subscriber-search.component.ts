import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from '../home.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Profile } from 'src/app/shared/models/profile';
import { CommonService, RefType } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-subscriber-search',
  templateUrl: './subscriber-search.component.html',
  styleUrls: ['./subscriber-search.component.scss'],
})
export class SubscriberSearchComponent implements OnInit {
  @Input() profile!: Profile;
  @Output() backToHome = new EventEmitter();

  myProfiles = [];
  isAdmin: boolean = false;
  searchProfile!: Profile;
  gothramList = [] as RefType[];
  sectList = [] as RefType[];
  subsectList = [] as RefType[];
  rasiList = [] as RefType[];
  starList = [] as RefType[];
  starPadamList = ['', 1, 2, 3, 4];

  matchedList: Profile[] = [];

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.homeService.profilesBySubscriberId().subscribe((res) => {
      this.myProfiles = res;
    });
    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });

    this.searchProfile = {
      caste_sect: '',
      subsect: '',
      star_paadam: '',
      gothram: '',
      star: '',
      rasi: '',
      age_pref_from: 0,
      age_pref_to: 0,
      height_pref_from: '',
      height_pref_to: '',
      salary_preference: 0,
    };

    this.commonService.getReferenceData('Gothram').subscribe((gothramList) => {
      this.gothramList = gothramList;
    });
    this.commonService.getReferenceData('Sect').subscribe((sect) => {
      this.sectList = sect;
    });
    this.commonService.getReferenceData('Rasi').subscribe((rasi) => {
      this.rasiList = rasi;
    });
    this.commonService.getReferenceData('Star').subscribe((star) => {
      this.starList = star;
    });
    console.log(this.profile);
    const params = { gendar: this.profile.gendar, age: this.profile.age };
    this.homeService.matchProfiles(params).subscribe((res) => {
      this.matchedList = res;
      this.tableData = res;
    });
  }

  changeSect(sect: string) {
    this.commonService.getReferenceData(sect).subscribe((subsect) => {
      this.subsectList = subsect;
    });
  }

  tableData: Profile[] = [];

  search() {    
    const filteredResult = this.matchedList.filter((item) => {
      return (
        (this.searchProfile.gothram === '' ||
          item.gothram.toLowerCase() ===
            this.searchProfile.gothram.toLowerCase()) &&
        (this.searchProfile.rasi === '' ||
          item.rasi.toLowerCase() === this.searchProfile.rasi.toLowerCase()) &&
        (this.searchProfile.star === '' ||
          item.star.toLowerCase() === this.searchProfile.star.toLowerCase()) &&
        (this.searchProfile.caste_sect === '' ||
          item.caste_sect.toLowerCase() ===
            this.searchProfile.caste_sect.toLowerCase()) &&
        (this.searchProfile.subsect === '' ||
          item.subsect.toLowerCase() ===
            this.searchProfile.subsect.toLowerCase()) &&
        (this.searchProfile.star_paadam === '' ||
          item.star_paadam.toLowerCase() ===
            this.searchProfile.star_paadam.toLowerCase()) &&
        (this.searchProfile.salary_preference === 0 ||
          item.salary_preference === this.searchProfile.salary_preference)
      );

      // Add more fields as needed
    });
    this.tableData = filteredResult;
  }

  clearFilters() {
    this.searchProfile = {
      caste_sect: '',
      subsect: '',
      gothram: '',
      star: '',
      star_paadam: '',
      rasi: '',
      age_pref_from: 0,
      age_pref_to: 0,
      height_pref_from: '',
      height_pref_to: '',
      salary_preference: 0,
    };
    this.tableData = this.matchedList;
  }
  home(){
    this.backToHome.emit();
  }
}
