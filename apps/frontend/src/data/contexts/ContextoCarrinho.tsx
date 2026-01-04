'use client'
import { Carrinho, ItemCarrinho, Produto } from '@gstore/core'
import { createContext, useEffect, useState } from 'react'

export interface ContextoCarrinhoProps {
    itens: ItemCarrinho[]
    qtdeItens: number
    valorTotal: number
    adicionarItem: (produto: Produto) => void
    removerItem: (produto: Produto) => void
    removerProduto: (produto: Produto) => void
    limpar: () => void
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any)

export function ProvedorCarrinho(props: any) {
    const [carrinho, setCarrinho] = useState<Carrinho>(new Carrinho())

    function adicionarItem(produto: Produto) {
        setCarrinho(carrinho.adicionarItem(produto))
    }

    function removerItem(produto: Produto) {
        setCarrinho(carrinho.removerItem(produto))
    }

    function removerProduto(produto: Produto) {
        setCarrinho(carrinho.removerProduto(produto))
    }

    function limpar() {
        setCarrinho(carrinho.limpar())
    }

    return (
        <ContextoCarrinho.Provider
            value={{
                itens: carrinho.itens,
                qtdeItens: carrinho.qtdeItens,
                valorTotal: carrinho.valorTotal,
                adicionarItem,
                removerItem,
                removerProduto,
                limpar,
            }}
        >
            {props.children}
        </ContextoCarrinho.Provider>
    )
}

export default ContextoCarrinho
