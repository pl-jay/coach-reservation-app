import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservationService } from 'src/app/core/consumer/reservation.service';

export interface DialogData {

}

@Component({
  selector: 'app-payment-overview',
  templateUrl: './payment-overview.component.html'
})

export class PaymentOverviewComponent implements OnInit {

  amount: number = 0
  balance = 9000

  constructor(
    private reservationService: ReservationService,
    public dialogRef: MatDialogRef<PaymentOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _snackBar: MatSnackBar) { }

  ngOnInit() { console.log(this.data) }

  onRightClick() {
    this.dialogRef.close(this.amount)
    this.dialogRef.afterClosed().subscribe((res) => {
      // this.reservationService.setReservation()
      console.log(res)
      this._snackBar.open('Reservation Success !', 'Ok')

    })
  }

  onDoneClick() {
    this.dialogRef.close();
  }

}
