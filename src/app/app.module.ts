import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { SuccessAlertComponent } from './assignment/success-alert.component';
import { WarningAlertComponent } from './assignment/warning-alert.component';
import { InputAssignmentComponent } from './assignment/input-assignment.component';
import { ArrayAssignmentComponent } from './assignment/array-assignment.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    InputAssignmentComponent,
    ArrayAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
