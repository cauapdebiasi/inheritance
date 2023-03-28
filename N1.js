class Ingresso {
    _valor;
    constructor(valor) {
        if (0 > valor)
            throw new Error('❌ O valor não pode ser negativo');
        this._valor = valor;
    }
    retorna_valor() {
        return this._valor;
    }
}
class IngressoVip extends Ingresso {
    _valorAdicional;
    constructor(valor, valorAdicional) {
        if (0 > valorAdicional)
            throw new Error('❌ O valor adicional não pode ser negativo');
        super(valor);
        this._valorAdicional = valorAdicional;
    }
    retorna_valor() {
        return this._valor + this._valorAdicional;
    }
}
class Testes {
    static testarIngresso(valor, esperado) {
        const ingressoTeste = new Ingresso(valor);
        if (ingressoTeste.retorna_valor() !== esperado)
            throw new Error('❌ Classe Ingresso não passou no teste');
        console.log('✅ Classe ingresso passou em todos os testes');
    }
    static testarIngressoVip(valor, valorAdicional, esperado) {
        const IngressoVipTeste = new IngressoVip(valor, valorAdicional);
        if (IngressoVipTeste.retorna_valor() !== esperado)
            throw new Error('❌ Classe ingressoVip não passou no teste');
        console.log('✅ Classe IngressoVip passou em todos os testes');
    }
    static rodarTestes() {
        this.testarIngresso(15, 15);
        this.testarIngresso(0, 0);
        this.testarIngresso(-1, -1); // Erro
        this.testarIngressoVip(35, 15, 50);
        this.testarIngressoVip(35, 0, 35);
        this.testarIngressoVip(-1, -1, -2); // Erro
    }
}
Testes.rodarTestes();
