import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numerosDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numerosDeContas += 1;
    }

    teste(){
        super.teste();
        console.log("teste na classe conta corrente")
    }
}




