import React, {createContext, useState} from 'react';

export const TeamContext = createContext();

export function TeamProvider(props){
    const [team, setTeam]=useState([]);
    const [teamA, setTeamA]=useState([]);
    const [teamB, setTeamB]=useState([]);
    const [isWinner, setIsWinner]=useState();

    return (
       <TeamContext.Provider value={{
            team, setTeam, 
            teamA, setTeamA, 
            teamB, setTeamB, 
            isWinner, setIsWinner, 
           }}>
           {props.children}
       </TeamContext.Provider> 
    )
}

