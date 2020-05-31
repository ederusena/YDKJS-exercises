/*
Não existe absolutamente nenhum substituto para prática ao aprender à programar. 
Nenhuma quantidade de artigos de minha parte, sozinhos, irão fazer você se tornar um programador.

Com isso em mente, vamos tentar praticar alguns conceitos que aprendemos neste capítulo.
Eu irei lhe dar os "requerimentos", e você primeiro irá tentar executá-los.
Depois, consulte o código listado abaixo para ver a forma que eu os resolvi.

1 - Escreva um programa que calcula o preço total da compra do seu celular.
2 - Você pode continuar comprando telefones (dica: loop!) até você ficar sem dinheiro na sua conta bancária.
3 - Você irá também comprar acessórios para cada telefone enquanto sua quantidade de dinheiro
for menor do que seu limite mensal.
4 - Após calcular o valor da compra, adicione as taxas, depois imprima a quantidade total, devidamente formatada.
5 - Por fim, verifique o total gasto em sua conta bancária para saber se você pode comprar ou não.

Você deve definir algumas constantes para a:
"taxa de imposto",
"preço do telefone",
"preço do acessório",
"limite de gastos",
assim como variáveis para o seu "saldo bancário".

Você deve definir funções para calcular a taxa e para formatar o preço com um "$"
e arredondá-lo para duas casas decimais.

Desafio Extra: Tente incorporar um input para esse programa, talvez com oprompt(..) que abordamos anteriormente em "Input". Você pode definir um prompt para o usuário para definir o saldo de sua conta bancária, por exemplo. Divirta-se e seja criativo!
Certo, vá em frente. Tente. Não venha ver o resultado do código que fiz enquanto você não tentar por conta própria!

Nota: Por este ser um livro de JavaScript, eu obviamente estarei resolvendo o exercício em JavaScript. Mas você pode fazer por enquanto em qualquer linguagem que você se sentir mais confortável.
*/
const SPENDING_THRESHOLD = 500.00;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 1000;
var amount = 0;

while ( amount < bank_balance){
  amount = amount + PHONE_PRICE;
  if (amount <= SPENDING_THRESHOLD){
    amount = amount + ACCESSORY_PRICE;
  }
}
amount = amount + (amount * TAX_RATE)

bank_balance = bank_balance - amount

console.log(`Total Gasto R$${amount.toFixed(2)}`)
if (amount > bank_balance){
  console.log('Voce nao pode pagar');
}

// Você não pode pagar a conta. :(
