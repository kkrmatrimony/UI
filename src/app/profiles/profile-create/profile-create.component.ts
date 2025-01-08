import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { ProfileService } from '../profile.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.scss'],
})
export class ProfileCreateComponent implements OnInit {
  profile: any = {
    profile_source: '',
    profile_name: '',
    gendar: '',
    profile_type: '',
    dob: '',
    age: 0,
    caste_sect: '',
    subsect: '',
    add_subsect: '',
    gothram: '',
    star_paadam: '',
    rasi: '',
    birth_time: '',
    birth_place: '',
    education: '',
    occupation: '',
    annual_income: 0,
    job_location: '',
    height: '',
    weight: '',
    father_detail: '',
    mother_detail: '',
    sibling_detail: '',
    contact_relation: '',
    primary_contact: 0,
    secondary_contact: 0,
    email_id: '',
    brief_detail: '',
    expectation: '',
    other_info: ' ',
    agree_inform_marriage: 'Y',
    agree_inform_exit: 'Y',
    self_declaration: 'Y',
    star: '',
    age_pref_from: 0,
    age_pref_to: 0,
    height_pref_from: '',
    height_pref_to: '',
    marriage_status: '',
    profile_for: '',
    created_by: JSON.parse(localStorage.getItem('user')!).OrgId,
    updated_by: JSON.parse(localStorage.getItem('user')!).OrgId,
  };

  gender = [
    {
      value: 'M',
      label: 'Male',
    },
    {
      value: 'F',
      label: 'Female',
    },
    {
      value: 'O',
      label: 'Other',
    },
  ];
  type = [
    {
      value: 'INDIAN',
      label: 'Indian',
    },
    {
      value: 'NRI',
      label: 'NRI',
    },
  ];

  caste = [
    {
      value: 'IYER',
      label: 'IYER',
    },
    {
      value: 'IYENGAR',
      label: 'IYENGAR',
    },
  ];

  subcaste = [
    {
      value: 'VADAMA',
      label: 'VADAMA',
    },
    {
      value: 'VATHIMA',
      label: 'VATHIMA',
    },
  ];
  profileFor = [
    {
      value: 'Yes',
      label: 'Yes',
    },
    {
      value: 'No',
      label: 'No',
    },
  ];
  marriageStatus = [
    {
      value: 'MARRIED',
      label: 'MARRIED',
    },
    {
      value: 'UNMARRIED',
      label: 'UNMARRIED',
    },
  ];

  currencies = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' },
    { code: 'INR', symbol: '₹' },
    { code: 'JPY', symbol: '¥' },
    { code: 'AUD', symbol: 'A$' },
    { code: 'CAD', symbol: 'C$' }
  ];
  
  selectedCurrency: string = 'INR'; 
  constructor(
    private utility: UtilityService,
    private profileService: ProfileService,
    private dialog: MatDialog,
    private router:Router
  ) {}

  ngOnInit(): void {
    if (history.state) {
      this.profile = history.state;
      this.profile.dob = this.utility.convertTodayTostr(this.profile.dob);
      this.profile.age = this.utility.getAge(this.profile.dob);
    }
  }
  setAge(dob: string) {
    this.profile.age = this.utility.getAge(dob);
    console.log(this.profile.age);
  }

  save() {
    this.profileService.saveProfile(this.profile).subscribe((data) => {
      const dialogRef = this.dialog.open(InfoDialogComponent, {
        width: '500px',
        data: 'Profile Saved',
      });

      dialogRef.afterClosed().subscribe((data) => {
        //this.router.navigate(['/home']);
      });
    });
  }
}
