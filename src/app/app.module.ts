import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AbbreviationModule } from './abbreviation/abbreviation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AbbreviationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
