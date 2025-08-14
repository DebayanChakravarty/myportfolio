import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appIoAnimate]' })
export class IoAnimateDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}
  ngAfterViewInit(): void {
    const target = this.el.nativeElement;
    target.classList.add('slide-in');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          target.style.animationPlayState = 'running';
          io.unobserve(target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    io.observe(target);
  }
}
