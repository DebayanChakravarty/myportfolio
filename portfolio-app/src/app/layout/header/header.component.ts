import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  menuOpen = false;
  openMenu(){ this.menuOpen = true; document.body.style.overflow = 'hidden'; }
  closeMenu(){ this.menuOpen = false; document.body.style.overflow = ''; }
}
