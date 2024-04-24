let number1 = Number(prompt("Insira o primeiro número:"))
let number2 = Number(prompt("insira o segun do número:"))

let sum = number1 + number2
let subtraction = number1 - number2
let multiplication = number1 * number2
let division = number1 / number2
let rest = number1 % number2

if (number1 == number2) {alert(`O primerio numero digitado: ${number1} é igual ao segundo numero digitado: ${number2}`)}
if ((sum % 2) == 0 ) {alert(`A soma dos numeros com total ${sum} é par`)}
else {alert(`A soma dos numeros com total ${sum} é impar`)}
alert(`O Resultado da soma dos dois números é: ${sum}`)
alert(`O Resultado da subtração dos dois números é: ${subtraction}`)
alert(`O Resultado da multiplicação dos dois números é: ${multiplication}`)
alert(`O Resultado da divisão dos números é: ${division}`)
alert(`O Resultado do resto da divisão dos dois números é: ${rest}`)
