import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

/** A view (page/modal) */
@Component({
  selector: 'ui-view',
  templateUrl: './ui-view.component.html',
  styleUrls: ['./ui-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UiViewComponent {
  @Input() type: 'page' | 'modal' = 'page';
  @Input() level?: 1 | 2 | 3 | 4 | 5 | 6;
}
