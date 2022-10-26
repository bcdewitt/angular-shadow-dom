import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ui-view-heading',
  template: `
    <!-- This will inherit font settings. Check CSS for set values -->
    <ui-heading [level]="level"><slot></slot></ui-heading>
  `,
  styles: [
    `
      /* Don't put anything important here - people can override it from the outside */
      :host {
        all: initial; /* Prevent cascade - the first worst thing about CSS */
        display: contents; /* We do this to prevent most external CSS selectors from working (not perfect) */
      }

      ui-heading {
        font-size: 2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UiViewHeadingComponent {
  @Input() level?: 1 | 2 | 3 | 4 | 5 | 6;
}
