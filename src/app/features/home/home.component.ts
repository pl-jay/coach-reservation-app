import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from 'src/app/shared/dialog-overview/dialog-overview.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HomeService } from 'src/app/core/consumer/home.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: Date
  routes: any = [{"id":0,"route":"none"}]
  selectedRoute: any
  tablesData: any = []

  showTable = new BehaviorSubject(false)
  dataAvailable = new BehaviorSubject(false)

  constructor(public dialog: MatDialog, public _homeService: HomeService) {
    this._homeService.getRoutes().subscribe((res) => {
      this.routes = res;
    })
  }

  ngOnInit() {
  }

  onLinkClick(event: MatTabChangeEvent) {
    event.index == 1 ? this.showTable.next(false) : this.showTable.next(true)
  }

onSubmit(){
  console.log(this.date)
  this._homeService.getCoachList().subscribe((res) => {
    this.tablesData = res;
    console.log(res)
  })

  this.showTable.next(true)
}

}


