const readline = require('readline-sync');
const fs = require('fs');

class Pessoas {
    nome;
    idade;
    peso;
    altura;


constructor (nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
}

calcularImc(){



   return this.peso/(this.altura^2);
}

}

let nomePessoa = readline.question('Digite o nome: ');
let idadePessoa = readline.questionInt('Digite a idade: ');
let pesoPessoa = readline.questionFloat('Digite o peso: ');
let alturaPessoa = readline.questionFloat('Digite a altura: ');

let pessoa = new Pessoas(nomePessoa, idadePessoa, pesoPessoa, alturaPessoa);

console.log(` ${pessoa.nome }  sua idade é: ${pessoa.idade} e seu IMC é:  ${pessoa.calcularImc()} `);

 