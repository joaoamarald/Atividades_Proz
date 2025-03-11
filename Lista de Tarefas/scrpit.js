class ListaDeCompras {
    constructor() {
        this.itens = [];
    }

    adicionarItem(item) {
        if (item && !this.itens.includes(item)) {
            this.itens.push(item);
            console.log(`"${item}" foi adicionado à lista.`);
        } else {
            console.log(`"${item}" já está na lista ou é inválido.`);
        }
    }

    removerItem(item) {
        const index = this.itens.indexOf(item);
        if (index !== -1) {
            this.itens.splice(index, 1);
            console.log(`"${item}" foi removido da lista.`);
        } else {
            console.log(`"${item}" não encontrado na lista.`);
        }
    }

    pesquisarPorNome(nome) {
        return this.itens.includes(nome) ? `"${nome}" está na lista.` : `"${nome}" não encontrado.`;
    }

    pesquisarPorPosicao(posicao) {
        if (posicao >= 0 && posicao < this.itens.length) {
            return `O item na posição ${posicao} é "${this.itens[posicao]}".`;
        }
        return "Posição inválida.";
    }

    exibirLista() {
        if (this.itens.length === 0) {
            console.log("A lista está vazia.");
        } else {
            console.log("Lista de compras:", this.itens.join(", "));
        }
    }
}

// Exemplo de uso:
const lista = new ListaDeCompras();
lista.adicionarItem("Maçã");
lista.adicionarItem("Leite");
lista.adicionarItem("Pão");
lista.exibirLista();
console.log(lista.pesquisarPorNome("Leite"));
console.log(lista.pesquisarPorPosicao(1));
lista.removerItem("Pão");
lista.exibirLista();
