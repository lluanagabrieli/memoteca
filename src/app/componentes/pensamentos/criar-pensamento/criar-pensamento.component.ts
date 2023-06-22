import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

    pensamento = {
        id: '1',
        conteudo: 'Exemplo de pensamento',
        autoria: 'Exemplo de autoria',
        modelo: 'modelo1'
    }

    criarPensamento(){
        alert('Pensamento criado!')
    }

}
