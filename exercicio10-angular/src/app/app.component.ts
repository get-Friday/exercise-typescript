import { Component, OnInit } from "@angular/core";
import { Aluno, Nota } from "src/assets/exercicios10";

@Component({
	selector: "app-root",
	template: ` <h2>Aluno aprovado? {{ this.passou }}</h2> `,
	styles: [],
})
export class AppComponent extends Aluno implements OnInit {
	title = "exercicio10-angular";
	media: number = 0;
	passou: boolean;

	ngOnInit(): void {
		let aluno1: Aluno = new Aluno("Jonas", 7);
		let notas: Nota[] = [
			{
				cadeira: "Geografia",
				ponto: 4,
				aluno: aluno1,
			},
			{
				cadeira: "Geografia",
				ponto: 8,
				aluno: aluno1,
			},
			{
				cadeira: "Geografia",
				ponto: 3,
				aluno: aluno1,
			},
			{
				cadeira: "Geografia",
				ponto: 10,
				aluno: aluno1,
			},
		];

    notas.forEach(e => {
      this.media += e.ponto
    })

    this.passou = this.aprovado(this.media);
	}
}
