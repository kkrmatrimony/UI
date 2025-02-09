import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriber-home-table',
  templateUrl: './subscriber-home-table.component.html',
  styleUrls: ['./subscriber-home-table.component.scss'],
})
export class SubscriberHomeTableComponent implements OnInit {
  @Input()
  set profileTableData(value: any) {
    console.log(value);
    this.dataSource.data = value;
  }
  @Input() showMatchIcon = false;
  @Output() updateEmit = new EventEmitter();
  @Output() matchEmit = new EventEmitter();

  dataSource = new MatTableDataSource(this.profileTableData);
  constructor(private router: Router) {}
  ngOnInit(): void {}

  displayedColumns: string[] = [
    'profile_name',
    'gendar',
    'dob',
    'marriage_status',
    'citizenship',
    'subscription_end_date',
    'primary_contact',
    'action',
    'match',
  ];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  edit_apt(value: any) {
    //this.router.navigate(['/apt-booking'], { state: value });
  }

  goToConsult(apt: any) {
    //this.router.navigate(['/pet-consultation-home'], { state: apt });
  }
  gotoProfile(profile: any) {
    this.router.navigate(['/profiles/create-profile'], { state: profile });
  }

  loadMatch(profile: any) {
    this.matchEmit.emit(profile);
  }
}
