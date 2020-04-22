import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface DialogData {
  name: string
  animal: string
}


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html'
})

export class DialogOverviewComponent implements OnInit {

  name: string
  animal: string

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() { }

  onNoClick() {
    this.dialogRef.close()
  }

  onClick() {
    this.dialogRef.close(this.animal)
    console.log(this.animal)
  }
}
