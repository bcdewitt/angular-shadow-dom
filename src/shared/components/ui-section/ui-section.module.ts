import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiHeadingModule } from '../_private';
import { UiSectionHeadingComponent } from './ui-section-heading/ui-section-heading.component';
import { UiSectionComponent } from './ui-section.component';

@NgModule({
  declarations: [UiSectionComponent, UiSectionHeadingComponent],
  imports: [CommonModule, UiHeadingModule],
  exports: [UiSectionComponent, UiSectionHeadingComponent],
})
export class UiSectionModule {}
