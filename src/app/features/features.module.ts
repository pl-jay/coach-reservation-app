import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTripComponent } from './current-trip/current-trip.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AuthModule } from './auth/auth.module';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [CurrentTripComponent, HomeComponent],
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
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
    AuthModule,
    SharedModule
  ],
  exports: [ CurrentTripComponent, AuthModule, HomeComponent ]
})
export class FeaturesModule { }
