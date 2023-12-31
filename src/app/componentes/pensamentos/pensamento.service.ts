import { Pensamento } from './pensamento/pensamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PensamentoService {

    private readonly API = "http://localhost:3000/pensamentos"

    constructor(private http:HttpClient) { }

    //método de listagem
    //passando um parâmetro de favoritos para evitar a repetição de código ao criar uma lista de favoritos
    listar(pagina: number, filtro: string, favoritos: boolean):Observable<Pensamento[]>{

        const itensPorPagina = 6;

        let params = new HttpParams()
        .set("_page", pagina)
        .set("_limit", itensPorPagina)

        ///posts?q=internet
        if(filtro.trim().length > 2){
            params = params.set("q", filtro);
        }

        //criando a condicional pois nem sempre será favoritos, então n é necessário inserir o .set no params acima
        if(favoritos){
            params = params.set("favorito", true);
        }


        /*GET /posts?_page=7&_limit=20
        return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`)*/

        return this.http.get<Pensamento[]>(this.API, { params })
    }

    /*listarPensamentosFavoritos(pagina: number, filtro: string): Observable<Pensamento[]>{
        const itensPorPagina = 6;

        let params = new HttpParams()
        .set("_page", pagina)
        .set("_limit", itensPorPagina)
        .set("favorito", true)

        if(filtro.trim().length > 2){
            params = params.set("q", filtro);
        }

        return this.http.get<Pensamento[]>(this.API, { params })
    }*/



    //método de criação com o método "post"
    criar(pensamento:Pensamento): Observable<Pensamento>{
        return this.http.post<Pensamento>(this.API, pensamento)
    }

    editar(pensamento: Pensamento): Observable<Pensamento> {
        const url = `${this.API}/${pensamento.id}`
        return this.http.put<Pensamento>(url, pensamento )
    }

    mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
        pensamento.favorito = !pensamento.favorito
        return this.editar(pensamento);
        //para evitar a repetição das linhas 43 e 44, eu chamo o método <editar>
    }

    //função de excluir
    excluir(id: number): Observable<Pensamento> {
        const url = `${this.API}/${id}`
        return this.http.delete<Pensamento>(url)
    }

    //buscar pelo id através da busca pelo pensamento pelo 'get'
    buscarPorId(id: number): Observable<Pensamento> {
        const url = `${this.API}/${id}`
        return this.http.get<Pensamento>(url)
    }
}

