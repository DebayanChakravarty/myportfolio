import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: 'a[appAnchorScroll]' })
export class AnchorScrollDirective {
  @Input('appAnchorScroll') targetId?: string;
  @HostListener('click', ['$event'])
  onClick(ev: Event) {
    if (!this.targetId) return;
    ev.preventDefault();
    document.getElementById(this.targetId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
