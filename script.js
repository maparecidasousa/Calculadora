// console.log("Bem vindos");
// console.log(1 + 1);

// //Boolean = Tipo de dado que só tem dois valores.
// console.log(true);
// console.log(false);

// //object =Possui propriedades (atributos) e funcionalidades(métodos).
// console.log({
//   name: "Maria",
//   idade: "28",
//   andar: function () {
//     console.log("andar");
//   },
// });

// //Array (vetores) = Forma de estruturar dados, uma lista, um agrupamento de dado.
// console.log(["leite", "ovos", 1, 2]);

// //variável = nome simbólico para receber algum valor, local para armazenar valores, são três palavras para criar uma variável (var,let,const).
// var clima = "Quente"
// console.log(clima)

// let clima = "Quente"
// const clima = "Quente"

// //declaração de variável.
// var name

// //atribuição de valores.
// name ="maria"

// //tipo de dado colocado na variável.
// console.log(typeof name)

// //agrupamento de declarações
// let age, ishuman
// age = 100
// isHuman = true

// //múltiplos argumentos na função.
// console.log(name,age,ishuman)

// //concatenando valores
// console.log('o' + name + 'tem' + age + 'anos.')

// //interpolante valores com templates strings.
// console.log(`o ${name} tem ${age} anos.` )

// //

// //1. Declare uma variável de nome weight.
// const weight;

// //2.Que tipo de dado é a variável acima?
// console.log(typeof weight)

// //3.Declare uma variável e atribua valores para cada um dos dados.
// const name = "Maria"
// age = 28
// stars = 5.2
// isSubscribed = true

// //4.Declare objeto.

// const student = {
//   name: "Maria",
//   age: 28,
//   star: 5.2,
//   isSubscribed: true,}

// //5.Mostre no console a seguinte mensagem: <name> de idade <age> pesa <weight> kg.
// console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.star} Kg.`)

//Function
//1 - primeiro criar declaração da função (exemplo de aplicativo para frases.).

// function createPhases() {
//   console.log("Estudar é muito bom");
//   console.log("Estudar é muito bom");
//   console.log("Estudar é muito bom");
//   console.log("Estudar é muito bom");
// }

// //2- Executar função (agrupa código e reutiliza, consegue usar a função quantas vezes quiser no decorrer do código é só executar na linha que deseja.).
// createPhases();

//Pode se declarar funções dentro de variável.
// const sum = function () {}

//inicio********************************************* */
// //parâmetros função.
// const sum = function (number1, number2) {
//   console.log(number1 + number2)
// }

// //argumentos função
// sum(2,3)
//************************************************* */

// //inicio********************************************* */
// //retornando valores dentro da função.
// const sum = function (number1, number2){
// //    let total = number1 + number2
// //   return total
// // }

// // let number1 = 20
// // let number2 = 22

// // console.log( ` O número 1 é ${number1}`)
// // console.log( ` O número 2 é ${number2}`)
// // console.log( ` A soma é ${sum(number1, number2)}`)
// // //****************************************************** */

// //function scope.
// let subject = "dormir";

// function creatThink(subject) {
//   subject = "study";
//   return subject;
// }

// console.log(subject);
// console.log(creatThink(subject));
// console.log(subject);
// console.log(subject);
// console.log(subject);

// //A variavel subject após a função creatThink ganha um novo significado, isso acontece porque foi atribuido o parametro (subject) e return, então quando o console log for executado o subject do creat think, caso não tivesse estabelecido o parametro, o console log executado depois do console log thik retornaria study porque sobrescreveria o de cima.

// // callback function é uma função passada para outra função como parâmetro.
// function sayname(name){
//   name()
// }

// sayname(
//   () => {
//     console.log ('estou em uma callback')
//   }
// )

// function calc(number1, number2){
//   return number1 * number2;
// }

// console.log (calc(20,40))
function acao() {
  alert("Evento disparado");
}

$(document).ready(function () {
  const dom = document.getElementById("nome_usuario");
  console.log(dom);
  document.getElementById("visor").style.textAlign = "right";
});

function distribui() {
  var caracter = document.getElementById("entrada").value;
  document.getElementById("entrada").value = "";
  console.log(caracter);
  caracter.trim();
  switch (caracter) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      document.getElementById("numero").value = caracter;
      break;
    default:
      document.getElementById("letra").value = caracter;
  }
}

function modificaEstilo(corDeFundo) {
  document.getElementById("quadrado").style.background = corDeFundo;
}

function modificaClasse() {
  document.getElementById("mensagem").className = "estilo2";
}

function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      document.getElementById("resultado").value = "";
    }

    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("resultado").value += valor;
      //o simbolo de + estar antes do sinal de igual para concatenar o valor que já estava no campo com o que for digitado.
    }
    if (valor === "=") {
      var valor_campo = eval(document.getElementById("resultado").value);
      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    document.getElementById("resultado").value += valor;
  }
}

function calcular2(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      document.getElementById("visor").value = "";
    }
    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "." ||
      valor === "%"
    ) {
      document.getElementById("visor").value += valor;
    }

    if (valor === "del") {
      var del = document.getElementById("visor").value;
      String(del);
      document.getElementById("visor").value = del.length;
      document.getElementById("visor").value = del.substr(0, del.length - 1);
    }

    if (valor === "=") {
      var resultado = eval(document.getElementById("visor").value);
      document.getElementById("visor").value = resultado;




      
    }
  } else if (tipo === "numero") {
    document.getElementById("visor").value += valor;
  }
}

var lista_frutas = Array()
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Manga'
lista_frutas[3] = 'Laranja'
lista_frutas[4] = 'Acerola'

lista_frutas.push ('laranja')

console.log(lista_frutas)
