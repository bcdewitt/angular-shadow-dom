import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiHeadingModule } from '../_private';
import { UiSectionComponent } from './ui-section.component';

@NgModule({
  declarations: [UiSectionComponent],
  imports: [CommonModule, UiHeadingModule],
  exports: [UiSectionComponent],
})
export class UiSectionModule {}
