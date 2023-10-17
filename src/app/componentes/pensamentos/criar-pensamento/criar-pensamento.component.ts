import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

    /*pensamento:Pensamento = {
        conteudo: '',
        autoria: '',
        modelo: ''
    }*/

    formulario!: FormGroup;

    constructor(
        private service: PensamentoService,
        private router: Router,
        //o FormBuilder é uma classe de serviço responsável pela criação do formulário
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {

        //ATRIBUTOS QUE VÃO CONSTAR NO FORMULÁRIO

        /*outra maneira de fazer formulários reativos:
        * cria um novo formulário e atribui a ele a instância da classe FormGroup
        * para cada input, atribui a instância da classe FormControl

        ngOnInit(): void {
            this.formulario = new FormGroup({
              conteudo: new FormControl(''),
              autoria: new FormControl(''),
              modelo: new FormControl('')
            })

          }*/


        /*construtor de formulários do angular: FormBuilder.
        * utiliza uma sintaxe simplificada;
        * por “debaixo dos panos”, o FormBuilder vai atribuir os controles aos campos */

        this.formulario = this.formBuilder.group({
            conteudo: ['', Validators.compose([
                Validators.required,
                Validators.pattern(/(.|\s)*\S(.|\s)*/)
            ])],
            autoria: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/^[a-z\s]+$/) //regex de letras minúsculas
            ])],
            modelo: ['modelo1']
        })
    }

    criarPensamento() {
        console.log(this.formulario.status)
        if(this.formulario.valid) {
            //this.service.criar(this.pensamento).subscribe(() => {
            this.service.criar(this.formulario.value).subscribe(() => {
                this.router.navigate(['/listarPensamento'])
            })
        }
    }

    cancelar() {
        this.router.navigate(['/listarPensamento'])
    }

    habilitarBotao(): string {
        if(this.formulario.valid) {
            return 'botao';
        }else {
            return 'botao__desabilitado';
        }
    }
}
