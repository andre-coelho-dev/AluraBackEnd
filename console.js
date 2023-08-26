// log -> registro

const minhaVar = true

console.log(245)
console.log("eu sou um texto")
console.log(minhaVar)

// tratamento de erro!

console.error("deu erro!")

// Outros métodos da Console API
// PRÓXIMA ATIVIDADE

// Embora seja o mais utilizado, .log() é um dos vários métodos que podemos utilizar para exibir informações na chamada “saída padrão” - o terminal - enquanto estamos desenvolvendo uma aplicação. A palavra log significa algo como “registro”, então este método apenas registra no terminal o que passamos entre os parênteses, por exemplo o conteúdo de uma variável ou o resultado de uma operação.

// Entre os outros métodos, existem:

// console.error() para exibir mensagens de erro;
// console.table() para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
// A documentação oficial do NodeJS dá exemplos sobre como utilizar cada um destes métodos e mais outros da lista. É uma documentação bastante extensa, mas não se preocupe! Você não precisa decorar a lista completa, já que ela está sempre disponível para consulta. Para a maior parte dos casos de exemplo, vamos continuar usando console.log().

// Características do JS
// PRÓXIMA ATIVIDADE

// O JavaScript foi padronizado em 1996 pela European Computer Manufacturers Association (ECMA), e é por isso que às vezes você o ouve como ECMAScript. É uma linguagem incrivelmente poderosa, presente na maioria dos navegadores e no back-end de grandes sistemas.

// No JavaScript, os tipos de dados podem ser divididos em duas categorias: tipos primitivos e tipos de objetos.
// --> Os tipos primitivos do JavaScript incluem números, texto (conhecidas como strings) e valores booleanos. Já o tipo objeto é uma coleção de propriedades, onde cada uma possui um nome e um valor, sendo ele um valor primitivo ou outro objeto.

// No JavaScript, podemos criar um programa com paradigma funcional e lógico.
// --> O JavaScript é uma linguagem de programação multiparadigma e possui suporte para funcional, orientado a objetos ou lógico por exemplo.

// Divisão por zero não é um erro no JavaScript.
// --> Diferente de outras linguagens de programação como Java ou Python, divisão por zero no JavaScript não gera um erro. O retorno desta operação é infinito ou infinito negativo (Infinity). Porém, a divisão de zero por zero resulta num NaN (not a number).

// Faça como eu fiz: Usando o console.error()
// PRÓXIMA ATIVIDADE

// Se você já tiver feito algum teste de console.log() utilizando o navegador, possivelmente já viu os métodos console.error() e console.warn() em ação, pois nos navegadores esses métodos são identificados com as cores vermelho e amarelo e emojis.

// Quando trabalhamos com NodeJS a “saída padrão” é o terminal e não o console do navegador, o que limita um pouco o uso de recursos gráficos. Vamos fazer um teste com o método console.error().

// Crie um arquivo .js em seu computador, escreva o seguinte código:

// console.log("deu erro");
// console.error("deu erro");
// Se executarmos este código com node script.js (não esqueça de conferir se está executando o comando dentro da pasta/diretório certo), o resultado é o mesmo para os dois comandos:

// deu erro
// deu erro
// Então não faz diferença usar um ou outro?

// Faz, sim. Porém, como em qualquer linguagem de programação, é normal que alguns métodos só funcionem da forma que esperamos se fornecermos os dados necessários da forma correta.

// Vamos tentar novamente, passando uma informação um pouco diferente para console.error():

// console.log("deu erro");
// console.error(new Error("deu erro"));
// Se executarmos este código, o resultado agora é diferente:

// deu erro
// Error: deu erro
//     at Object.<anonymous> (/home/juliana/Documents/alura/2206-fundamentosjs/comparacoes.js:21:15)
//     at Module._compile (internal/modules/cjs/loader.js:1076:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
//     at Module.load (internal/modules/cjs/loader.js:941:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:782:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//     at internal/main/run_main_module.js:17:47
// O que vimos acima - a palavra-chave new seguida de Error com inicial maiúscula - é um gostinho de como trabalhamos com classes em JavaScript.

// O que aprendemos?
// PRÓXIMA ATIVIDADE

// Nesta aula vimos:
// As características principais do JavaScript, como ser uma linguagem interpretada e dinamicamente tipada.
// Que o NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mas sim no servidor.
// Como ler os erros que aparecem no console da aplicação, podendo usar um tradutor, como o Google Tradutor, para entender o que o erro está avisando.
// O que é stacktrace, também chamado de pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza.
// O que é o Console API e como podemos utilizá-lo usando o console.log() e console.error().
// Onde as mensagem do console devem aparecer dependendo do interpretador que estamos usando, sendo que para o NodeJS as mensagens são mostradas no terminal