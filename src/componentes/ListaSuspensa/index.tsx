import './ListaSuspensa.css'

interface ListaProps {
    label: string
    aoAlterado: (valor: string) => void
    valor: string
    required: boolean
    itens: string[]
}

const ListaSuspensa = ({label, aoAlterado, valor, required, itens}: ListaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa