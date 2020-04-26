import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { PaymentOverviewComponent } from '../payment-overview/payment-overview.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {

}

@Component({
  selector: 'app-advance-payment-overview',
  templateUrl: './advance-payment-overview.html'
})

export class AdvancePaymentOverviewComponent implements OnInit {

  amount: number = 0

  constructor(
    public dialog: MatDialog,
    public _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AdvancePaymentOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onClick() {
    this.dialogRef.close(this.amount)
    this.dialogRef.afterClosed().subscribe(() => {
      this.paymentDialog()
    })
  }

  onCancelClick() {
    this.dialogRef.close();
  }



  paymentDialog() {
    const dialogRef = this.dialog.open(
      PaymentOverviewComponent, {
      width: '280px',
      disableClose: true,
      data: this.data
    });
  }

}
