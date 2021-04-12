import React, {createContext, useState, useContext, useEffect} from 'react';
import {TeamContext} from '../contexts/TeamContext';

export const ScoreContext = createContext();

export function ScoreProvider (props){
    
    const {team, teamB, isWinner}  = useContext(TeamContext);

    const [scores, setScores] = useState([
    //    { yourScore: 200,
    //     dealerScore: 320,
    //         win: true,
    //     date: '6:20'} 
    ])
    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        if(teamB.length>=3){
            setScores([...scores, {
                yourScore: team.reduce((exp, poke)=>exp+poke.exp, 0),
                dealerScore: teamB.reduce((exp, poke)=>exp+poke.exp, 0),
                win: isWinner,
                date: new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'}).replace(' ', '')
            }])    
            setTeams([...teams, {
                yourTeam: team,
                dealersTeam: teamB
            }])
        }
    }, [isWinner])

    return(
        <ScoreContext.Provider value={{
                teams, setTeams,
                scores, setScores,
            }}>
            <>
                {props.children}
            </>
        </ScoreContext.Provider>
    )
}
