import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CountdownComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
