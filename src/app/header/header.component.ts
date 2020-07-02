import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background: coral; color: white}',
    'li a { color: white; display: block}',
    'ul.nav a:hover { color: black  }',
    '.container-fluid{display: block}',
    '.container-fluid.ul.li.a.img{ border-radius: 10px}'
  ]
})
export class HeaderComponent {
  constructor() {}

  }
