
class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        let idade = this.obtemIdadeAtleta();

        if (idade >= 9 && idade <= 11){
            return "Infantil";
        }

        if (idade >= 12 && idade <= 13){
            return "Juvenil";
        }
    
        if (idade >= 14 && idade <= 15){
            return "Intermediário";
        }
    
        if (idade >= 16 && idade <= 30){
            return "Adulto";
        }
        else{
            return "Sem categoria";
        }

    }

    calculaIMC(){
        return this.obtemPesoAtleta() / (this.altura * this.altura);
    }

    calculaMediaValida(){
        let notas = this.obtemNotasAtleta()
        let notasOrdenadas = notas.sort(function(a, b){
            return a < b ? -1 : a > b ? 1 : 0;
        })

        let notasSelecionadas = notasOrdenadas.slice(1,4);
        let quantidadeNotas = notasSelecionadas.length;

        let somaNotas = notasSelecionadas.reduce(function(total, atual){
            return total + atual;
        }, 0)

        return somaNotas / quantidadeNotas;
    }

    obtemNomeAtleta(){
        return this.nome;
    }

    obtemIdadeAtleta(){
        return this.idade;
    }

    obtemPesoAtleta(){
        return this.peso;
    }

    obtemNotasAtleta(){
        return this.notas;
    }

    obtemCategoria(){
        return this.calculaCategoria();
    }

    obtemIMC(){
        return this.calculaIMC();
    }

    obtemMediaValida(){
        return this.calculaMediaValida(this.notas);
    }

    mostrarSaida(){
        return `Nome: ${this.obtemNomeAtleta()}\nIdade: ${this.obtemIdadeAtleta()}\nPeso: ${this.obtemPesoAtleta()}\nAltura: ${this.altura}\nNotas: ${this.obtemNotasAtleta()}\nCategoria: ${this.obtemCategoria()}\nIMC: ${this.obtemIMC()}\nMédia válida: ${this.obtemMediaValida()}`;

    }

}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.mostrarSaida());