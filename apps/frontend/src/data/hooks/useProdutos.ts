'use client'
import { Produto } from '@gstore/core'
import { useCallback, useEffect, useState } from 'react'

const urlBase = 'http://localhost:3005'

export default function useProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function obterProdutos(): Promise<Produto[]> {
        const resp = await fetch(`${urlBase}/produtos`)
        const produtos = await resp.json()
        return produtos ?? []
    }

    const obterProdutoPorId = useCallback(async function obterProdutoPorId(
        id: number
    ): Promise<Produto | null> {
        try {
            const resp = await fetch(`${urlBase}/produtos/${id}`)
            const produto = await resp.json()
            return produto ?? null
        } catch (error) {
            console.error('Erro ao obter produto por id', error)
            return null
        }
    }, [])

    useEffect(() => {
        obterProdutos().then(setProdutos)
    }, [])

    return {
        produtos,
        obterProdutoPorId,
    }
}
