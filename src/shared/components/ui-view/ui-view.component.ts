import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
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
  @Input() heading = '';

  constructor(public cdr: ChangeDetectorRef) {}

  @ViewChild('headingSlotElement')
  headingSlotElement: ElementRef<HTMLSlotElement>;

  hasSlottedElements(slot?: ElementRef<HTMLSlotElement>): boolean {
    const allAssignedNodes =
      slot?.nativeElement.assignedNodes({ flatten: true }) ?? [];
    const nonCommentNodes = allAssignedNodes.filter(
      (n) => n.nodeType !== Node.COMMENT_NODE
    );
    return nonCommentNodes.length > 0;
  }
}
