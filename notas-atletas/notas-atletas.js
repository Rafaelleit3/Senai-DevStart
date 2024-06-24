

class NotasAtletas {

  constructor(atletas){
    this.atletas = atletas;
  }

  ordenarNotas(notas){
    return notas.sort();
  }

  selecionarNotasDoMeio(notas){
    let notasOrdenadas = notas.sort(function(a, b){
      return a < b ? -1 : a > b ? 1 : 0;
    })

    return notasOrdenadas.slice(1,4);
  }


  obterMedia(notas){
    let notasSelecionadas = this.selecionarNotasDoMeio(notas);
    let quantidadeNotas = notasSelecionadas.length;

    let somaNotas = notasSelecionadas.reduce(function(total, atual){
      return total + atual;
    }, 0)

    return somaNotas / quantidadeNotas;
  }

  mostrarResultados(){
    return this.atletas.forEach(atleta => {
      console.log(`Atleta: ${atleta.nome}\nNotas obtidas: ${this.ordenarNotas(atleta.notas)}\nMédia Válida: ${this.obterMedia(atleta.notas)}\n`);
    });

  }

}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

let notasAtletas = new NotasAtletas(atletas);
notasAtletas.mostrarResultados();