class Aluno {
	private nome: string;
	private matricula: number;
	public passou: boolean = false;

	constructor(nome: string, matricula: number) {
		this.nome = nome;
		this.matricula = matricula;
	}

	aprovado(media: number): boolean {
		media >= 7 ? this.passou = true : this.passou = false
		return this.passou
	}
}

interface Nota {
	cadeira: string;
	ponto: number;
	aluno: Aluno;
}

export { Aluno, Nota };
