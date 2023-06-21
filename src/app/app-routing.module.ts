import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

//representa as rotas da aplicação
//path: caminho. Ele é em formato de string.
//componente: o componente que vai ser utilizado nessa rota
const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarPensamento',
        pathMatch: 'full'
        //quando o path está vazio, é preciso adicionar o pathMatch
        //full: considera toda a URL
        //prefix: considera só o endereço da página inicial - antes da primeira /
    },
    {
        path: 'criarPensamento',
        component: CriarPensamentoComponent
    },

    {
        path: 'listarPensamento',
        component: ListarPensamentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
