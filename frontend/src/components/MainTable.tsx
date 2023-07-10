'use client'

import { useRouter } from "next/navigation"

export default function MainTable() {
    const router = useRouter()
    return (
        <div className="flex flex-col w-full"> {/* Table Div */}
            <div className="flex items-center justify-center text-center text-white text-2xl font-bold m-6 p-6 bg-slate-500 rounded"> {/* Header Div */}
                <span className="flex flex-col w-1/6">Referencia</span>
                <span className="flex flex-col w-1/6">Nome</span>
                <span className="flex flex-col w-1/6">Valor</span>
                <span className="flex flex-col w-1/6">Linha</span>
                <span className="flex flex-col w-1/6">Tamanho</span>
                <span className="flex flex-col w-1/6">Ações</span>
                <hr />
            </div>
            <div className="flex flex-col-2 items-center p-2 text-white">
                <button type="submit"
                    onClick={() => {
                        router.push("/products/add")
                    }}
                    className="bg-cyan-950 p-2 m-4 rounded hover:bg-cyan-500 hover:text-black
                    delay-50">
                    Adicionar Produto
                </button>
                <button type="submit"
                    className="bg-cyan-950 p-2 m-4 rounded hover:bg-cyan-500 hover:text-black
                    delay-50">
                    Enviar
                </button>
                <button type="submit"
                    className="bg-cyan-950 p-2 m-4 rounded hover:bg-cyan-500 hover:text-black
                    delay-50">
                    Gerar PDF
                </button>
                <button type="submit"
                    onClick={() => {
                        router.push("/products/new")
                    }}
                    className="bg-cyan-950 p-2 m-4 rounded hover:bg-cyan-500 hover:text-black
                    delay-50">
                    Adicionar ao Banco
                </button>
            </div>
        </div>
    )
}