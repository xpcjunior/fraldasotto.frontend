import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <hr>
  <span class="footer-msg">
      Copyright <i class="fa-solid fa-copyright"></i> 2024 Paulo Cabral. Powered by <i class="fa-brands fa-angular"></i> Angular
  </span>
  `,
  styles: `
  .footer-msg {
    padding-bottom: 20px;
    color: gray;
  }
  `
})
export class FooterComponent {
}
