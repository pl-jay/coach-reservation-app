import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import material modules
import { MaterialModule } from './material.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { AuthEffects } from './store/auth-store/effects/auth.effects';
import { reducer } from './store/auth-store/reducers/auth.reducers';
import { LoaderService } from './core/loader/loader.service';
import { HttpInterceptorService } from './core/interceptor/http.interceptor'
import { FeaturesModule } from './features/features.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    StoreModule.forRoot({ auth: reducer}),
    LayoutModule,
    FeaturesModule,
    SharedModule,
    EffectsModule.forRoot([AuthEffects]),

  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
