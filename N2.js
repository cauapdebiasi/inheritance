class Empregado {
    _nome;
    _salario;
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    imprimir() {
        console.log(`Empregado ${this.nome}, recebe R$${this.salario}`);
    }
}
class Gerente extends Empregado {
    _departamento;
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    imprimir() {
        console.log(`Gerente ${this.nome} do departamento ${this.departamento}, recebe R$${this.salario}`);
    }
}
class Vendedor extends Empregado {
    _percentualComissao;
    constructor(nome, salario, percentualComissao) {
        super(nome, salario);
        this.percentualComissao = percentualComissao;
    }
    get percentualComissao() {
        return this._percentualComissao;
    }
    set percentualComissao(percentualComissao) {
        this._percentualComissao = percentualComissao;
    }
    calcularSalario() {
        return this.salario + (this.salario * this.percentualComissao);
    }
    imprimir() {
        console.log(`Vendedor ${this.nome}, recebe bruto R$${this.salario}, recebe com ${this.percentualComissao * 100}% comissao R$${this.calcularSalario()}`);
    }
}
class Testes {
    static testarEmpregado(nomeTeste, SalarioTeste) {
        const empregadoTeste = new Empregado(nomeTeste, SalarioTeste);
        this._esperarValorIgual(empregadoTeste.nome, nomeTeste);
        this._esperarValorIgual(empregadoTeste.salario, SalarioTeste);
    }
    static testarGerente(nomeTeste, salarioTeste, departamentoTeste) {
        const gerenteTeste = new Gerente(nomeTeste, salarioTeste, departamentoTeste);
        this._esperarValorIgual(gerenteTeste.nome, nomeTeste);
        this._esperarValorIgual(gerenteTeste.salario, salarioTeste);
        this._esperarValorIgual(gerenteTeste.departamento, departamentoTeste);
    }
    static testarVendedor(nomeTeste, salarioTeste, percentualComissaoTeste) {
        const vendedorTeste = new Vendedor(nomeTeste, salarioTeste, percentualComissaoTeste);
        this._esperarValorIgual(vendedorTeste.nome, nomeTeste);
        this._esperarValorIgual(vendedorTeste.salario, salarioTeste);
        this._esperarValorIgual(vendedorTeste.percentualComissao, percentualComissaoTeste);
        this._esperarValorIgual(vendedorTeste.calcularSalario(), salarioTeste + (salarioTeste * percentualComissaoTeste));
    }
    static rodarTestes() {
        const [nomeTeste, salarioTeste, departamentoTeste, percentualComissaoTeste] = ["Cleiton", 3300, "Vendas", 0.7];
        this.testarEmpregado(nomeTeste, salarioTeste);
        this.testarGerente(nomeTeste, salarioTeste, departamentoTeste);
        this.testarVendedor(nomeTeste, salarioTeste, percentualComissaoTeste);
    }
    static _esperarValorIgual(valorATestar, valorEsperado) {
        if (valorATestar !== valorEsperado)
            throw new Error("❌ Não passou no teste");
        console.log("✅ Passou no teste");
    }
}
Testes.rodarTestes();
