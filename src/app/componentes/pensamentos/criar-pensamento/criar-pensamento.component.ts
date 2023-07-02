import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

    pensamento:Pensamento = {
        id: 1,
        conteudo: 'Exemplo de pensamento',
        autoria: 'Exemplo de autoria',
        modelo: 'modelo1'
    }

    criarPensamento(){
        alert('Pensamento criado!')
    }

}
