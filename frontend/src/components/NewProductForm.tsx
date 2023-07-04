export default function NewProductForm() {
    return (
        <form className="flex flex-1 flex-col items-center">
            <div className="p-2">
                <label htmlFor="input-reference">Referencia</label>
                <input id="input-reference" type="text" className="flex flex-col items-center" placeholder="Ex: INF01-912"/>
            </div>
            <div className="p-2">
                <label htmlFor="input-name">Nome</label>
                <input type="text" className="flex flex-col items-center" id="input-name" placeholder="Nome do Produto"/>
            </div>
            <div className="p-2">
                <label htmlFor="input-valor">Valor</label>
                <input type="text" className="flex flex-1 flex-col" id="input-valor" placeholder="Ex: 29.90"/>
            </div>
            <div className="p-2">
                <label htmlFor="input-linha">Linha</label>
                <input type="text" className="flex flex-1 flex-col" id="input-linha" placeholder="Ex: Infantil"/>
            </div>
            <div className="p-2">
                <label htmlFor="input-tamanho">Tamanho</label>
                <input type="text" className="flex flex-1 flex-col" id="input-tamanho" placeholder="Ex: 20cm x 20cm x 2cm"/>
            </div>
        </form>
    )   
}