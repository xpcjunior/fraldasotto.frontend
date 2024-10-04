import { Component } from '@angular/core';
import { Estoque } from '../../core/models/estoque.model';
import { AutomacaoService } from '../../core/services/automacao.service';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  dados: Estoque | undefined;

  constructor(private automacaoService: AutomacaoService) {
    this.automacaoService.buscarPorId('MTy69bQ4QPsF8gS9D9sc').subscribe(
      {
        next: (registro) => {
          this.dados = registro;
        },
        error: (e) => {
          console.log(e);
        }
      }
    );
  }

}
