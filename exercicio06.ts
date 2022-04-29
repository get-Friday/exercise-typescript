class Conta {
    protected saldo: number;
    protected estaAtiva: boolean;

    constructor(saldo: number, estaAtiva: boolean) {
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
    }
}

class ContaEmpresa extends Conta {
    protected limiteDeposito: number = 1000;

    constructor(saldo: number, estaAtiva: boolean) {
        super(saldo, estaAtiva)
    }

    deposito(valor: number) {
        if (valor > this.limiteDeposito) {
            console.log('Valor excede limite do depósito');
            return
        }

        this.saldo += valor;
    }

    imprimeValorConta() {
        console.log('Saldo da conta: '+ this.saldo)
    }
}

const conta = new ContaEmpresa(0, true)

conta.deposito(3500)
conta.deposito(250)
conta.imprimeValorConta()