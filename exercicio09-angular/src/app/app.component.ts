import { Component, OnInit } from "@angular/core";
import Produto from "src/assets/exercicio09";

@Component({
	selector: "app-root",
	template: ` <h2>Total da compra: {{ valorTotal }}</h2> `,
	styles: [],
})
export class AppComponent implements OnInit, Produto {
	title = "exercicio09-angular";
	valorTotal: number = 0;
	nome: string = "";
	valor: number = 0;
	codigo: number = 0;
	quantidade: number = 0;
	emEstoque: boolean = true;

	constructor() {}

	ngOnInit(): void {
		this.comprar(this.sofa, 30);
		this.comprar(this.sofa, 10);
	}

	sofa: Produto = {
		nome: "Sofá 4 lugares",
		valor: 120,
		codigo: 1,
		quantidade: 30,
		emEstoque: true,
	};

	comprar(produto: Produto, quantidade: number) {
		if (!produto.emEstoque) {
			return;
		}

		if (produto.quantidade < quantidade) {
			return;
		}

		this.valorTotal += quantidade * produto.valor;
		produto.quantidade -= quantidade;
		if (produto.quantidade <= 0) {
			produto.emEstoque = false;
		}
	}
}
