import React, { createContext, useState } from 'react';

export const ScoreContext = createContext();

export function ScoreProvider (props){
    
    const [scores, setScores] = useState([])

    return(
        <ScoreContext.Provider value={{
                scores, setScores,
            }}>
            <>
                {props.children}
            </>
        </ScoreContext.Provider>
    )
}
