class Filme {
    nome: string;
    anoDeLancamento: number;
    diretor: string;

    constructor(nome:string, anoDeLancamento:number, diretor:string) {
        this.nome = nome;
        this.anoDeLancamento = anoDeLancamento;
        this.diretor = diretor;
    }
}

const holyGrail = new Filme('Monty Python and the Holy Grail', 1975, 'Terry Gilliam and Terry Jones')

console.table(holyGrail)