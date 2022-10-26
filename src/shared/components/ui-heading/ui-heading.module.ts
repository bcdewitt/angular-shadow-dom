import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiHeadingComponent } from './ui-heading.component';

@NgModule({
  declarations: [UiHeadingComponent],
  imports: [CommonModule],
  exports: [UiHeadingComponent],
})
export class UiHeadingModule {}
