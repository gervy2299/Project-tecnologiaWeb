import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../functions/funciones'

const Inicio = () => {

    const [personajes, setPersonajes] = useState(null)

    useEffect(()=>{
        todosPersonajes(setPersonajes)
    }, [])

    return (
        <>
        {personajes !== null ? (
            personajes.map(personaje => (
                <div key={personaje.id}>
                    <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>       
                    <img src={`${personaje.image}`} alt={`${personaje.name}`} />             
                </div>
            ))
        ) : ( 'no hay personajes    ')}
        </>
    )
}

export default Inicio