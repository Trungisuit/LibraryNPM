import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrungFormatParagraphModule } from 'projects/trung-format-paragraph/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TrungFormatParagraphModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
