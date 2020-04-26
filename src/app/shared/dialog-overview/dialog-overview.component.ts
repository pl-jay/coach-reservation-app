import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AdvancePaymentOverviewComponent } from '../advance-payment/advance-payment-overview.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  seatNo: number
}


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html'
})

export class DialogOverviewComponent implements OnInit {

  seatNo: any
  selectedNo: number = 0

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.seatNo = this.data
  }

  onClick() {
    this.dialogRef.close(this.selectedNo)

    this.dialogRef.afterClosed().subscribe(() => {
      this.paymentDialog();
    })
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  paymentDialog() {
    const dialogRef = this.dialog.open(
      AdvancePaymentOverviewComponent, {
        width: '280px',
        disableClose: true,
        data: this.selectedNo
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

}
