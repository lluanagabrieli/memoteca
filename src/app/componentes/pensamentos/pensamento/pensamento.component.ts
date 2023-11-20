import { Component, Input } from '@angular/core';
import { Pensamento } from './pensamento';
import { PensamentoService } from '../pensamento.service';

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
        modelo: '',
        favorito: false
    }

    @Input() listaFavoritos: Pensamento[] = [];

    constructor(private service: PensamentoService){}

    //o ngClass é um uma diretiva de atributos que adiciona classes CSS ao elemento
    //ngFor e ngIf adicionam e removem elementos do template, sendo classificados como estruturais
    larguraPensamento(): string{
        if(this.pensamento.conteudo.length >= 256) {
            return 'pensamento-g'
        }
        return 'pensamento-p'
    }

    mudarIconeFavorito(): string{
        if(this.pensamento.favorito == false){
            return 'inativo'
        }else{
            return 'ativo'
        }
    }

    atualizarFavoritos(){
        this.service.mudarFavorito(this.pensamento).subscribe(() => {
            this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
        }); //está sendo removido um elemento da lista this.listaFavoritos. O elemento que está sendo removido é o this.pensamento, e a remoção é feita usando o método splice na posição obtida por indexOf(this.pensamento). O segundo argumento do splice é 1, indicando que apenas um elemento será removido.
    }
}
