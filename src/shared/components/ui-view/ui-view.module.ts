import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiHeadingModule } from '../_private';
import { UiViewComponent } from './ui-view.component';

@NgModule({
  declarations: [UiViewComponent],
  imports: [CommonModule, UiHeadingModule],
  exports: [UiViewComponent],
})
export class UiViewModule {}
