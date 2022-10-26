import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  UiViewModule,
  UiSectionModule,
  UiHeadingModule,
} from '../shared/components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UiHeadingModule,
    UiViewModule,
    UiSectionModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
