import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ErrorInputDirective } from './directives/error-input.directive';
import { FormsModule } from '@angular/forms';
import { LittleDatePipe } from './pipes/little-date.pipe';
import { MiddleDatePipe } from './pipes/middle-date.pipe';
import { FullDatePipe } from './pipes/full-date.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ErrorInputDirective,
    LittleDatePipe,
    MiddleDatePipe,
    FullDatePipe,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
