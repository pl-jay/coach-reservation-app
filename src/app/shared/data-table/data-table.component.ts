import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HomeService } from 'src/app/core/consumer/home.service';
import { EventEmitter } from 'protractor';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {


  availableSeat: any;

  dataAvailable = new BehaviorSubject(false)

  @Input('dataSource')
  dataSourceForTables: any

  displayedColumns: string[] = ['name', 'no','route', 'seats','button'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,public _homeService: HomeService) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    if (this.dataSourceForTables != null) {
      this.dataAvailable.next(true)
    }
  }



  onSubmit(id) {
    this._homeService.getSeatList(id).subscribe((result) => {
      const dialogRef = this.dialog.open(
        DialogOverviewComponent, {
          width: '280px',
          disableClose: true,
          data: result
        });
    })
  }

}
