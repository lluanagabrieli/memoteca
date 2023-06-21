import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
    //o decorator @Input() informa que irá receber informações do pai
    //dumb component: ele não pensa, somente recebe informações de fora. Por possuir esta característica ele também pode ser reutilizado.
    @Input() pensamento = {
        conteudo: 'I love Angular',
        autoria: 'Luana',
        modelo: 'modelo2'
    }
}
