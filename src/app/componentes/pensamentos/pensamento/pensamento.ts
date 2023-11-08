//A interface ou tipagem é como um contrato que deve ser seguido por ambas as partes — front-end e back-end.

//adicionando o '?' na frente da variável, ela se torna opcional
export interface Pensamento {
    id?: number
    conteudo: string
    autoria: string
    modelo: string
    favorito: boolean
}
