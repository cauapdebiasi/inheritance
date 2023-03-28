class Ingresso {
    protected _valor: number

    constructor(valor: number) {
        if (0 > valor) throw new Error('❌ O valor não pode ser negativo')
        this._valor = valor
    }

    public retorna_valor(): number {
        return this._valor
    }
}

class IngressoVip extends Ingresso {
    protected _valorAdicional: number

    constructor(valor: number, valorAdicional: number) {
        if (0 > valorAdicional) throw new Error('❌ O valor adicional não pode ser negativo')
        super(valor)
        this._valorAdicional = valorAdicional
    }

    public retorna_valor(): number {
        return this._valor + this._valorAdicional
    }
}

class Testes {
    public static testarIngresso(valor: number, esperado: number) {
        const ingressoTeste = new Ingresso(valor)
        if (ingressoTeste.retorna_valor() !== esperado) throw new Error('❌ Classe Ingresso não passou no teste')
        console.log('✅ Classe ingresso passou em todos os testes')
    }

    public static testarIngressoVip(valor: number, valorAdicional: number, esperado: number) {
        const IngressoVipTeste = new IngressoVip(valor, valorAdicional)
        if (IngressoVipTeste.retorna_valor() !== esperado) throw new Error('❌ Classe ingressoVip não passou no teste')
        console.log('✅ Classe IngressoVip passou em todos os testes')
    }

    public static rodarTestes() {
        this.testarIngresso(15, 15)
        this.testarIngresso(0,0)
        this.testarIngresso(-1,-1) // Erro
        this.testarIngressoVip(35,15, 50)
        this.testarIngressoVip(35,0, 35)
        this.testarIngressoVip(-1,-1, -2) // Erro
    }
}

Testes.rodarTestes()