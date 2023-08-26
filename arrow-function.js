function apresentar(nome) {
  return `meu nome é ${nome}` // `` -> template string
}

const apresentarArrow = nome => `meu nome é ${nome}` // arrow function clássica, como está chamando apenas um parâmetro não precisa de parênteses e não precisa de "return"

const soma = (num1, num2) => num1 + num2 // como tem mais de 1 parâmentro precisa de chaves ou parênteses

// arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "somente números de 1 a 9"
  } else {
    return num1 + num2
  }
}

// Hoisting: arrow function se comporta como expressão

// operador maior ou igual que) >=