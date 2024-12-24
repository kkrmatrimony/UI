import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss']
})
export class profileTableComponent implements OnInit {
  @Input()
  set profileTableData(value: any) {
    console.log(value);
    this.dataSource.data = value;   
  }
  @Output() updateEmit = new EventEmitter();

  dataSource = new MatTableDataSource(this.profileTableData);
  constructor(private router:Router){}
  ngOnInit(): void {
   
  }


  retrieveAppointments(data: any) {
    // this.aptService.getAppointments(data).subscribe((response) => {
    //   this.dataSource.data = response.results;
    // });
  }

  displayedColumns: string[] = ['profile_name', 'age', 'action'];


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
  gotoProfile(profile:any){
    this.router.navigate(['/profiles/create-profile'],{ state: profile });
  }

}
