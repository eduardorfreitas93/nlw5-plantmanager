// resolver os conflitos entre as regras do ESLint e as regras do Prettier
module.exports = {
  singleQuote: true, // para utilizar aspas simples
  trailingComma: 'all', // para adicionar vírgula sempre ao final de um objeto que tenha sido quebrado em linhas
  arrowParens: 'avoid', // para que não seja adicionado parênteses quando uma Arrow Function tiver apenas um parâmetro
}
