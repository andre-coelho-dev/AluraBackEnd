// boolean
// true -> verdadeiro
// false -> falso

const primeiroNumero= 5
const segundoNumero = 5
let cadastroAtivado = true

// console.log(primeiroNumero === segundoNumero)

const texto1 = "Alura"
const texto2 = "alura"

console.log(texto1 === texto2)

// Padrão de nomes no JavaScript
// PRÓXIMA ATIVIDADE

// Um detalhe muito importante, mas que às vezes não percebemos quando começamos a programar, é que cada linguagem possui seus próprios padrões. Eles servem não somente para a escrita de códigos que funcionem, mas também para criar nomes de variáveis, estruturar um programa e muito mais.

// A primeira coisa que precisamos ter em mente é que o JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas. Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como console.log) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas.

// Para ilustrar, o JavaScript trata os quatro exemplos abaixo como variáveis diferentes e não apresentará nenhum erro se você executar o programa:

// const minhaVar = 1;
// const MinhaVar = "texto";
// const minhavar = "3";
// const MINHAVAR = 2;

// console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)
// Podemos ver que, em um programa muito grande, a possibilidade de problemas é grande. Então como sabemos a forma certa de nomear? Aí entra o que chamamos de convenções, para padronizar estes aspectos do código.

// Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

// camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.
// snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.
// kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.
// PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.
// Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.

// Quando falamos de convenção, estamos falando de boas práticas e padronização. Se você utilizar qualquer um dos padrões acima para nomear variáveis com JavaScript (com exceção do padrão kebab-case), seu código continuará funcionando, mas seguir as convenções é parte de desenvolver um código legível e bem escrito.

// Esse é um assunto vasto e com muitos detalhes, e é parte do nosso trabalho no cotidiano como pessoas que desenvolvem garantir que os chamados guias de estilo definidos para um produto de código sejam seguidos.

// Você pode ir aprendendo os detalhes aos poucos, enquanto estuda, e observá-los sendo aplicados nos códigos que vê por aí.

// Tipos null e undefined
// PRÓXIMA ATIVIDADE

// Nesta aula falamos sobre três tipos primitivos: number, string e boolean. Mas existem ainda mais dois tipos que não abordamos com profundidade: null e undefined.

// O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

// let input = null;

// if (input === null) {
//  console.log('não há informação');
// } else {
//  console.log(input);
// }COPIAR CÓDIGO
// Nesse caso, qual seria a diferença entre os dois casos abaixo?

// let input = null;
// let input2;

// console.log(input); // null
// console.log(input2); // undefined
// É aqui que entra o tipo undefined. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

// undefined também é o valor retornado por uma função que não tem cláusula return. Veremos mais sobre funções e return mais adiante no curso.

// É importante notar que, embora os dois tipos sejam utilizados para sinalizar ausência de valor, os operadores de comparação do JavaScript podem ou não diferenciá-los:

// console.log(null == undefined); // true
// console.log(null === undefined); // false
// No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor null.