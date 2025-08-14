import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IoAnimateDirective } from './directives/io-animate.directive';
import { ParallaxDirective } from './directives/parallax.directive';
import { AnchorScrollDirective } from './directives/anchor-scroll.directive';


@NgModule({
  declarations: [IoAnimateDirective, ParallaxDirective, AnchorScrollDirective],
  imports: [CommonModule],
  exports: [IoAnimateDirective, ParallaxDirective, AnchorScrollDirective]
})
export class SharedModule {}
