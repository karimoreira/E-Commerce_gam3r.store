import { Produto } from '../produto'
import ItemCarrinho from './ItemCarrinho'

export default class Carrinho {
    constructor(readonly itens: ItemCarrinho[] = []) {}

    adicionarItem(produto: Produto): Carrinho {
        const itemAtual = this.itemPorProduto(produto)
        if (itemAtual) {
            return new Carrinho(this.alterarQuantidade(this.itens, produto, 1))
        } else {
            return new Carrinho([...this.itens, { produto, quantidade: 1 }])
        }
    }

    removerItem(produto: Produto): Carrinho {
        const itemAtual = this.itemPorProduto(produto)
        if (!itemAtual) return this

        if (itemAtual.quantidade > 1) {
            return new Carrinho(this.alterarQuantidade(this.itens, produto, -1))
        } else {
            return new Carrinho(this.itens.filter((i) => i.produto.id !== produto.id))
        }
    }

    removerProduto(produto: Produto): Carrinho {
        return new Carrinho(this.itens.filter((i) => i.produto.id !== produto.id))
    }

    limpar(): Carrinho {
        return new Carrinho([])
    }

    get qtdeItens(): number {
        return this.itens.map((i) => i.quantidade).reduce((a, b) => a + b, 0)
    }

    get valorTotal(): number {
        return this.itens
            .map((i) => i.produto.precoPromocional * i.quantidade)
            .reduce((a, b) => a + b, 0)
    }

    private itemPorProduto(produto: Produto): ItemCarrinho | undefined {
        return this.itens.find((i) => i.produto.id === produto.id)
    }

    private alterarQuantidade(
        itens: ItemCarrinho[],
        produto: Produto,
        diferenca: number
    ): ItemCarrinho[] {
        return itens.map((i) =>
            i.produto.id === produto.id ? { ...i, quantidade: i.quantidade + diferenca } : i
        )
    }
}
