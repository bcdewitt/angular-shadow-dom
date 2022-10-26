import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiHeadingModule } from '../_private';
import { UiViewHeadingComponent } from './ui-view-heading/ui-view-heading.component';
import { UiViewComponent } from './ui-view.component';

@NgModule({
  declarations: [UiViewComponent, UiViewHeadingComponent],
  imports: [CommonModule, UiHeadingModule],
  exports: [UiViewComponent, UiViewHeadingComponent],
})
export class UiViewModule {}
