import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

/** A view (page/modal) section. Design-wise, this appears as a card but those are internal details of the component */
@Component({
  selector: 'ui-section',
  templateUrl: './ui-section.component.html',
  styleUrls: ['./ui-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UiSectionComponent {
  @Input() type?: 'article' | 'nav' | 'aside' | 'address' | 'main';
  @Input() level?: 1 | 2 | 3 | 4 | 5 | 6;
  @Input() label = ''; // Couldn't use "title" because it's an existing global attribute

  constructor(public cdr: ChangeDetectorRef) {}

  @ViewChild('defaultSlotElement')
  defaultSlotElement: ElementRef<HTMLSlotElement>;
  @ViewChild('labelSlotElement') labelSlotElement: ElementRef<HTMLSlotElement>;
  @ViewChild('actionsSlotElement')
  actionsSlotElement: ElementRef<HTMLSlotElement>;

  hasSlottedElements(slot?: ElementRef<HTMLSlotElement>): boolean {
    const allAssignedNodes =
      slot?.nativeElement.assignedNodes({ flatten: true }) ?? [];
    const nonCommentNodes = allAssignedNodes.filter(
      (n) => n.nodeType !== Node.COMMENT_NODE
    );
    return nonCommentNodes.length > 0;
  }
}
