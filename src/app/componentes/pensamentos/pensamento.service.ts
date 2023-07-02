import { Pensamento } from './pensamento/pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PensamentoService {

    private readonly API = "http://localhost:3000/pensamentos"

    constructor(private http:HttpClient) { }

    //método de listagem
    listar():Observable<Pensamento[]>{
        return this.http.get<Pensamento[]>(this.API)
    }

    //método de criação com o método "post"
    criar(pensamento:Pensamento): Observable<Pensamento>{
        return this.http.post<Pensamento>(this.API, pensamento)
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

    editar(pensamento: Pensamento): Observable<Pensamento> {
        const url = `${this.API}/${pensamento.id}`
        return this.http.put<Pensamento>(url, pensamento )
    }
}

