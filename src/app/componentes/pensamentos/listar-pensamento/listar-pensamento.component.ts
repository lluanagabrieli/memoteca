import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})

export class ListarPensamentoComponent implements OnInit {

    listaPensamentos: Pensamento[] = [];
    paginaAtual: number = 1;
    haMaisPensamentos: boolean = true;
    filtro: string = '';
    favoritos: boolean = false;
    listaFavoritos: Pensamento[] = [];
    titulo: string = 'Meu mural';

    constructor(private service: PensamentoService,
        private router: Router
        ) { }

    ngOnInit(): void {
      this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
      })
    }

    carregarMaisPensamentos(){
        this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
            .subscribe(listaPensamentos => {
                this.listaPensamentos.push(...listaPensamentos);

                if(!listaPensamentos.length){
                    this.haMaisPensamentos = false;
                }
            })
    }

    pesquisarPensamentos(){
        this.paginaAtual = 1;
        this.haMaisPensamentos = true;


        this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
            .subscribe(listaPensamentos => {
                this.listaPensamentos = listaPensamentos
            })
    }

    recarregarComponente(){
        //location.reload(); : recarrega toda a página
        //onSameUrlNavigation: essa propriedade diz que quando eu estiver navegando na mesma URL, preciso dizer ao Angular o que eu quero que aconteça
        this.favoritos = false;
        this.paginaAtual = 1;

        //não reutilizar o componente quando a rota for a mesma
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        //recarrega o componente mesmo se a url for a mesma
        this.router.onSameUrlNavigation = 'reload';
        //navega para a url atual
        this.router.navigate([this.router.url])
    }

    meusFavoritos(){
        this.titulo = 'Meus Favoritos'
        this.favoritos = true
        this.haMaisPensamentos = true;
        this.paginaAtual = 1;
        this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
            .subscribe(listaPensamentosFavoritos => {
                this.listaPensamentos = listaPensamentosFavoritos
                this.listaFavoritos = listaPensamentosFavoritos
            })
    }
  }

