import './CampoTexto.css'
import React from 'react'

interface CampoTextoProps {
    placeholder: string
    aoAlterado: (valor: string) => void
    valor: string
    label: string
    required?: boolean
    tipo?: 'text' | 'number' | 'date' | 'password' | 'email'
} 
const CampoTexto = ({placeholder, aoAlterado, label, required = false, valor, tipo='text'}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={required}
                type={tipo}
                placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto