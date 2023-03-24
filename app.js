let numero;
do {
  numero = prompt("ingresa un número para la serie de fibonacci: ");

  if((isNaN(numero))){
    alert("el valor ingresado es errado");
  }

} while (isNaN(numero));

let numerofib = parseInt(numero);

num1 = 0;
num2 = 1;
let lista = [];

for (let i = 1; i <= numerofib; i++) {
  lista.push(num1);
  suma = num1 + num2;
  num1 = num2;
  num2 = suma;
}
  
alert(lista);