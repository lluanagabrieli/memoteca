import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento/pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {
    pensamento: Pensamento = {
        id: 0,
        conteudo: '',
        autoria: '',
        modelo: ''
    }

    constructor(
        private service: PensamentoService,
        private router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        //constante recebendo informações do id do cartão
        const id = this.route.snapshot.paramMap.get('id')
        this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento
    })}

    editarPensamento() {
        this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
    })
    }

    cancelar(){
        this.router.navigate(['/listarPensamento'])
    }

}
