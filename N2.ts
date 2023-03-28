class Empregado {
    private _nome: string
    protected _salario: number

    constructor(nome: string, salario: number) {
        this.nome = nome
        this.salario = salario
    }

    get nome(): string {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }

    get salario() {
        return this._salario
    }

    set salario(salario: number) {
        this._salario = salario
    }

    public imprimir() {
        console.log(`Empregado ${this.nome}, recebe R$${this.salario}`)
    }
}

class Gerente extends Empregado {
    protected _departamento: string

    constructor(nome: string, salario: number, departamento: string) {
        super(nome, salario)
        this.departamento = departamento
    }

    get departamento() {
        return this._departamento
    }

    set departamento(departamento: string) {
        this._departamento = departamento
    }

    public imprimir() {
        console.log(`Gerente ${this.nome} do departamento ${this.departamento}, recebe R$${this.salario}`)
    }
}

class Vendedor extends Empregado {
    
    protected _percentualComissao: number

    constructor(nome: string, salario: number, percentualComissao: number) {
        super(nome, salario)
        this.percentualComissao = percentualComissao
    }

    get percentualComissao() {
        return this._percentualComissao
    }

    set percentualComissao(percentualComissao: number) {
        this._percentualComissao = percentualComissao
    }

    public calcularSalario(): number {
        return this.salario + (this.salario * this.percentualComissao)
    }

    public imprimir(): void {
        console.log(`Vendedor ${this.nome}, recebe bruto R$${this.salario}, recebe com ${this.percentualComissao * 100}% comissao R$${this.calcularSalario()}`)
    }
}

class Testes {
    public static testarEmpregado(nomeTeste: string, SalarioTeste: number) {
        const empregadoTeste = new Empregado(nomeTeste, SalarioTeste)
        this._esperarValorIgual(empregadoTeste.nome, nomeTeste)
        this._esperarValorIgual(empregadoTeste.salario, SalarioTeste)
    }

    public static testarGerente(nomeTeste: string, salarioTeste: number, departamentoTeste: string) {
        const gerenteTeste = new Gerente(nomeTeste, salarioTeste,departamentoTeste)
        this._esperarValorIgual(gerenteTeste.nome,nomeTeste)
        this._esperarValorIgual(gerenteTeste.salario,salarioTeste)
        this._esperarValorIgual(gerenteTeste.departamento,departamentoTeste)
    }

    public static testarVendedor(nomeTeste: string, salarioTeste: number, percentualComissaoTeste: number) {
        const vendedorTeste = new Vendedor(nomeTeste, salarioTeste, percentualComissaoTeste)
        this._esperarValorIgual(vendedorTeste.nome, nomeTeste)
        this._esperarValorIgual(vendedorTeste.salario, salarioTeste)
        this._esperarValorIgual(vendedorTeste.percentualComissao, percentualComissaoTeste)
        this._esperarValorIgual(vendedorTeste.calcularSalario(), salarioTeste + (salarioTeste * percentualComissaoTeste))
    }

    public static rodarTestes() {
        const [nomeTeste, salarioTeste, departamentoTeste,percentualComissaoTeste] = ["Cleiton",3300,"Vendas",0.7]
        this.testarEmpregado(nomeTeste,salarioTeste)
        this.testarGerente(nomeTeste,salarioTeste,departamentoTeste)
        this.testarVendedor(nomeTeste,salarioTeste,percentualComissaoTeste)
    }

    private static _esperarValorIgual(valorATestar: string | number | boolean,valorEsperado: string | number | boolean) {
        if (valorATestar !== valorEsperado) throw new Error("❌ Não passou no teste")
        console.log("✅ Passou no teste") 
    }
}

Testes.rodarTestes()