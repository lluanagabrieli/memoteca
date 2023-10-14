# ESTUDOS 
- Componente: é o arquivo TS
- Template: é toda a visualização, o HTML

## FLUXO DE DADOS DENTRO DO COMPONENTE: 
- DATA BINDINGS UNIDIRECIONAIS (one way data-binding):
    - PROPERTY BINDING: envia dados do componente para o template. 
        - sintaxe: < [] para propriedades > e < {{}} para tags (interpolação) >.
    - EVENT BINDING: envia dados do template para o componente. Utiliza ()

- DATA BINDINGS BIDIRECIONAIS - two way data-binding (atualizados ao mesmo tempo):
    - sintaxe (banana na caixa): [(ngModel)]=""

    * o ngModel é uma diretiva muito utilizada em formulários.
