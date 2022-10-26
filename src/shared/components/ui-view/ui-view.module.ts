import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiViewComponent } from './ui-view.component';

@NgModule({
  declarations: [UiViewComponent],
  imports: [CommonModule],
  exports: [UiViewComponent],
})
export class UiViewModule {}
