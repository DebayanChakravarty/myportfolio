import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appParallax]' })
export class ParallaxDirective {
  @Input() speed = 0.5;
  constructor(private el: ElementRef<HTMLElement>) {}
  @HostListener('window:scroll') onScroll() {
    const y = window.pageYOffset * this.speed;
    this.el.nativeElement.style.transform = `translateY(${-y}px)`;
    this.el.nativeElement.style.willChange = 'transform';
  }
}
