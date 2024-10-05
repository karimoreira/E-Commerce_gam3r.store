'use client'
import { Produto } from '@gstore/core'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import NotaReview from '../shared/NotaReview'

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (
        <Link
            href={`/produto/${produto.id}`}
            className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
        >
            <div className="absolute flex justify-end top-2.5 right-2.5">
                <NotaReview nota={produto.nota} />
            </div>
            <div className="h-48 w-full relative">
                <Image
                    src={produto.imagem}
                    alt="Imagem do produto"
                    className="object-contain"
                    fill
                />
            </div>
            <div
                className="
                    flex-1 flex flex-col p-5 gap-3 
                    border-t border-white/10
                "
            >
                <span className="text-lg font-semibold">{props.produto.nome}</span>
                <span className="text-sm border-b border-dashed self-start">
                    {produto.especificacoes.destaque}
                </span>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        de {props.produto.precoBase}
                    </span>
                    <span className="text-xl font-semibold text-emerald-400">
                        por {props.produto.precoPromocional}
                    </span>
                </div>
                <button
                    className="
                        flex justify-center items-center h-8 gap-2
                        bg-violet-700 hover:border-2 border-emerald-500 rounded-full
                    "
                    onClick={(e: any) => {
                        e.preventDefault()
                        console.log('Adicionar ao carrinho')
                    }}
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Adicionar</span>
                </button>
            </div>
        </Link>
    )
}
