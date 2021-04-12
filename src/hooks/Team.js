import React, {useContext, useEffect} from 'react';
import {TeamContext} from '../contexts/TeamContext';
import {PokeListContext} from '../contexts/PokelistContext';
import Team_div from './Team_div';


export const TeamA=()=>{
    const { team, teamB, setTeamB, isWinner, setIsWinner }  = useContext(TeamContext);
    const { pokes, gameStart } = useContext(PokeListContext);

    const exp1=team.reduce((exp, poke)=>exp+poke.exp, 0);

  useEffect(() => {

    if(gameStart) {
        const updatePokes=pokes.filter(p=>
            p.id !== team[0].id &&
            p.id !== team[1].id &&
            p.id !== team[2].id 
        );

        function getRandom(arr, n) {
            var result = new Array(n),
                len = arr.length,
                taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            while (n--) {
                var x = Math.floor(Math.random() * len);
                result[n] = arr[x in taken ? taken[x] : x];
                taken[x] = --len in taken ? taken[len] : len;
            }
            return result;
        }
        const newTeam=getRandom(updatePokes, 3)

        if(teamB.length<3){
            setTeamB(newTeam);
        } else {
            setTimeout(()=>{
                setIsWinner(team.reduce((exp, poke)=>exp+poke.exp, 0)>teamB.reduce((exp, poke)=>exp+poke.exp, 0) && true)
            }, 600)
        }
    }  
  })

    return(                                                       
        <Team_div 
            hand={'your hand'}
            isWinner={isWinner}
            exp={exp1}
            team={team}
        />
    )
}

export function TeamB(props){
    const {teamB, isWinner} = useContext(TeamContext);
    const exp2=teamB.reduce((exp, poke)=>exp+poke.exp, 0);

    return (
            <Team_div 
                hand={"dealer's hand"}
                isWinner={isWinner}
                exp={exp2}
                team={teamB}
            />   
  )
}