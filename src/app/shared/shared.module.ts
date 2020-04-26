import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component'
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatOptionModule } from '@angular/material/core';
import { LoaderComponent } from './loader/loader.component';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { AdvancePaymentOverviewComponent } from './advance-payment/advance-payment-overview.component';
import { PaymentOverviewComponent } from './payment-overview/payment-overview.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [DialogOverviewComponent, AdvancePaymentOverviewComponent, PaymentOverviewComponent, DataTableComponent, LoaderComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [DialogOverviewComponent, AdvancePaymentOverviewComponent, PaymentOverviewComponent, DataTableComponent, LoaderComponent]
})
export class SharedModule { }
