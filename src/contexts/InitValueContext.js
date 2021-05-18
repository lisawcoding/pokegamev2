import React, { createContext, useState } from 'react';

export const InitValueContext = createContext();

export function InitValueProvider (props) {
    const [loading, setLoading] = useState(true);
    const [totalPokes] = useState(200);
    const [perPokes, setPerPokes] = useState(12);
    const [apiUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=')
    const [round, setRound] = useState(3)

    return(
        <InitValueContext.Provider value={{
            loading, setLoading,
            totalPokes,
            perPokes, setPerPokes,
            apiUrl,
            round, setRound,
        }}>
            {props.children}
        </InitValueContext.Provider>
    )
}