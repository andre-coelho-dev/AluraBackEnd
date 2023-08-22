// type String

const texto1 = "Olá, mundo!"
const texto2 = 'Olá, mundo!'
const senha = "senhaSuperSegura456"
const StringDeNumeros = "34567"

const citacao = "Meu nome é "
const meuNome = "Leonardo"

// concatenação (+)

console.log(citacao + meuNome)

// template string OU template literal


// Codificação de strings
// PRÓXIMA ATIVIDADE

// Acabamos de ver que usamos o tipo string sempre que queremos trabalhar com dados de texto. Mas se pararmos para pensar, vários idiomas utilizam caracteres diferentes, como acentos e ideogramas. Como as linguagens de programação lidam com isso? E o que dizer dos emojis :question:? Você já visitou algum site e notou que os caracteres dos textos não pareciam corretos, que no lugar de alguns deles aparecia um sinal de interrogação, quadrados ou traços?

// Isso tudo tem a ver com a codificação de caracteres, ou character encoding. Nas últimas décadas, foram desenvolvidos diversos conjuntos de caracteres especiais, cada um com seus próprios códigos, para que pessoas que escrevem e leem em linguagens diferentes do inglês pudessem utilizar computadores com seus próprios idiomas. E como isso funciona?

// Para que o computador consiga decifrar um caractere especial, é preciso utilizar um sistema específico que tenha basicamente um código para cada caractere, e que o computador possa acessá-lo para fazer a conversão - uma ideia similar a que está por trás da criptografia.

// Foram desenvolvidos diversos conjuntos de caracteres, desde os específicos de cada linguagem como Western, Latin-US, Japanese e assim por diante, até o ASCII (American Standard Code for Information Interchange ou ”Código Padrão Americano para o Intercâmbio de Informação”). e a partir de 2007 foi adotado o formato Unicode. O padrão UTF (de Unicode Transformation Format ou “formato de conversão de unicode”, em tradução livre) é utilizado como padrão na web até hoje.

// O Unicode tem códigos específicos para “cifrar” e “decifrar” caracteres de mais de 150 idiomas antigos e modernos, e também diversos outros conjuntos de caracteres como símbolos matemáticos e inclusive emojs. A Wikipedia tem uma lista extensa de todas as tabelas com os códigos Unicode e os caracteres, como por exemplo os que estão abaixo:

// caractere	UTF-16	descrição oficial
// $	U+0024	DOLLAR SIGN
// A	U+0041	LATIN CAPITAL LETTER A
// ✅	U+2705	CHECK MARK
// ぁ	U+3041	HIRAGANA LETTER SMALL A
// Podemos testar a transformação/conversão do código Unicode em caractere utilizando o console.log(). Faça o teste:

// const cifrao = '\u0024'
// const aMaiusculo = '\u0041'
// const tique = '\u2705'
// const hiragana = '\u3041'

// console.log(cifrao)
// console.log(aMaiusculo)
// console.log(tique)
// console.log(hiragana)COPIAR CÓDIGO
// Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

// O JavaScript usa, por padrão, o UTF-16. O número 16 está relacionado aos espaços em bits ocupados por cada caractere, 16 neste caso. Não vamos nos aprofundar na relação entre tipos de dados e espaço de memória ocupado por cada tipo - você pode pesquisar mais sobre o assunto, assim como sobre o que são caracteres de escape! - mas por enquanto é bacana vermos na prática como o Unicode funciona.

// Bancos de dados podem aceitar outros tipos de codificação de caracteres, o que faz sentido se pensarmos que o UTF-16 utiliza uma quantidade relativamente grande de espaço em memória para salvar cada caractere. 16 bits parece pouco, mas algumas vezes os bancos precisam salvar quantidades enormes de dados! Porém, com as tecnologias de armazenamento e tráfego de dados que temos hoje, esta já não é uma preocupação tão grande, a não ser em casos muito específicos. Já não é muito comum utilizar uma codificação diferente da UTF em bancos mesmo em caso de grandes volumes de dados, mas sempre vai depender muito do caso.

// Trabalhando com strings
// PRÓXIMA ATIVIDADE

// O JavaScript traz em sua biblioteca-base vários métodos que usamos para manipular strings de texto: alterar de maiúsculas para minúsculas, contar quantas letras tem uma palavra, retirar espaços, juntar duas strings, etc.

// Vamos pensar em alguns exemplos práticos para fazer esse tipo de alteração. Por exemplo, para padronizar uma comparação entre strings:

// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// console.log(cidade === input); // false
// Nós, como pessoas, conseguimos perceber o valor das variáveis cidade e input como sendo da mesma cidade, Belo Horizonte. Porém, para o JavaScript, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos, o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

// Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.

// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// const inputMinusculo = input.toLowerCase();

// console.log(cidade === inputMinusculo); // trueCOPIAR CÓDIGO
// Acima, vemos um dos métodos de string nativos do JavaScript em ação, o toLowerCase() que converte todos os caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido). Você pode conferir mais sobre este método no MDN.

// Outro exemplo: qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:

// const senha = "minhaSenha123"
// console.log(senha.length) // 13 caracteres
// COPIAR CÓDIGO
// A propriedade length é muito usada no dia a dia do desenvolvimento web. Você pode descobrir mais sobre ela aqui.

// Percebeu que length não leva parênteses no final da palavra? Há uma diferença entre métodos e propriedades que não vamos abordar durante este curso, mas vamos deixar aqui a dica caso tenha curiosidade! ;)

// Você pode conferir a lista completa de métodos de string do MDN (são vários), com a descrição de cada um, e praticar com os exemplos.