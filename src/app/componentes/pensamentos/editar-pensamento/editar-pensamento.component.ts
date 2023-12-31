import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento/pensamento';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {
    /*pensamento: Pensamento = {
        id: 0,
        conteudo: '',
        autoria: '',
        modelo: ''
    }*/

    formulario!: FormGroup;

    constructor(
        private service: PensamentoService,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        //constante recebendo informações do id do cartão
        const id = this.route.snapshot.paramMap.get('id')
        this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
            this.formulario = this.formBuilder.group({
                id: [pensamento.id],
                conteudo: [pensamento.conteudo, Validators.compose([
                    Validators.required,
                    Validators.pattern(/(.|\s)*\S(.|\s)*/)
                ])],
                autoria: [pensamento.autoria, Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                ])],
                modelo: [pensamento.modelo],
                favorito: [pensamento.favorito]
            })
        })
    }

    editarPensamento() {
        this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
    })
    }

    cancelar(){
        this.router.navigate(['/listarPensamento'])
    }

    habilitarBotao(): string {
        if(this.formulario.valid) {
          return "botao"
        }
        else return "botao__desabilitado"
      }
}
