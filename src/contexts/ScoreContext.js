import React, { createContext, useState } from 'react';

export const ScoreContext = createContext();

export function ScoreProvider (props){
    
    // const [scores, setScores] = useState([])
    const [scores, setScores] = useState([
        {"yourScore":293,"dealerScore":337,"win":"dealer","date":"4/5/2021 09:08:36","teams":{"yourTeam":[{"id":1,"name":"bulbasaur","height":7,"weight":69,"exp":64,"src":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png","src_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png","src_back":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png","isSelected":true,"team":"yourTeam"},{"id":19,"name":"rattata","height":3,"weight":35,"exp":51,"src":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png","src_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png","src_back":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png","isSelected":true,"team":"yourTeam"},{"id":15,"name":"beedrill","height":10,"weight":295,"exp":178,"src":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png","src_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png","src_back":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png","isSelected":true,"team":"yourTeam"}],"dealerTeam":[{"id":23,"name":"ekans","height":20,"weight":69,"exp":58,"src":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png","src_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png","src_back":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png","isSelected":true,"team":"dealerTeam"},{"id":17,"name":"pidgeotto","height":11,"weight":300,"exp":122,"src":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png","src_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png","src_back":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png","isSelected":true,"team":"dealerTeam"},{"id":24,"name":"arbok","height":35,"weight":650,"exp":157,"src":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png","src_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png","src_back":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png","isSelected":true,"team":"dealerTeam"}]},"check":"check"}
    ])

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
