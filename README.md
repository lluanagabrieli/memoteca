- Criação do componente cabecalho
- Criação do componente rodapé
- Adição desses dois componentes no HTML do app, colocando uma tag <main> entre os dois para não ficarem juntos. OBS: a tag main possui estilos CSS com um background-image.

- Criar componente <pensamentos> que terá tudo relacionado ao pensamento. Dentro dessa pasta, vamos criar o componente responsável por criar-pensamento, que é o nosso formulário. 
- Fazemos todo o HTML dele

# ESTUDOS 
- Componente: é o arquivo TS
- Template: é toda a visualização, o HTML

## FLUXO DE DADOS DENTRO DO COMPONENTE: 
- DATA BINDINGS UNIDIRECIONAIS (one way data-binding):
    - PROPERTY BINDING: envia dados do componente para o template. Utiliza []
    - EVENT BINDING: envia dados do template para o componente. Utiliza ()

- DATA BINDINGS BIDIRECIONAIS - two way data-binding (atualizados ao mesmo tempo):
    - sintaxe (banana na caixa): [(ngModel)]=""

    * o ngModel é uma diretiva muito utilizada em formulários.
