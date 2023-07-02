import { Component, Input } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
    //o decorator @Input() informa que irá receber informações do pai
    //dumb component: ele não pensa, somente recebe informações de fora. Por possuir esta característica ele também pode ser reutilizado.
    @Input() pensamento:Pensamento = {
        id: 0,
        conteudo: '',
        autoria: '',
        modelo: ''
    }

    //o ngClass é um uma diretiva de atributos que adiciona classes CSS ao elemento
    //ngFor e ngIf adicionam e removem elementos do template, sendo classificados como estruturais
    larguraPensamento(): string{
        if(this.pensamento.conteudo.length >= 256) {
            return 'pensamento-g'
        }
        return 'pensamento-p'
    }
}
