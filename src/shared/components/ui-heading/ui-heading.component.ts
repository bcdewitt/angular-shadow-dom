import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ui-heading',
  templateUrl: './ui-heading.component.html',
  styleUrls: ['./ui-heading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UiHeadingComponent implements OnChanges {
  @Input() level?: 1 | 2 | 3 | 4 | 5 | 6;

  protected innerHTML = '';

  ngOnChanges(): void {
    const tagName = this.level === undefined ? 'div' : `h${this.level}`;
    this.innerHTML = `<${tagName}><slot></slot></${tagName}>`;
  }
}
