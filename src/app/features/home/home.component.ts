import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from 'src/app/shared/dialog-overview/dialog-overview.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string
  animal: string

  items: any = [
    {id:0,value:'Colombo to Kandy'},
    {id:1,value:'Kandy - London'},
    {id:2,value:'Gampola - Dubai'}
  ]

  tab: any = [
    {}
  ]

  ngOnInit() {

  }

  constructor(public dialog: MatDialog) { }



  openDialog() {
    const dialogRef = this.dialog.open(
      DialogOverviewComponent, {
        width: '200px',
        data: { name: this.name }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.animal = result
      console.log('Dialog was closed !')
    })
  }

}


