import React, { useContext } from 'react';

import Poke_card from './Poke_card';

import { PokeListContext } from '../contexts/PokelistContext';
import { TeamContext } from '../contexts/TeamContext';

function CardsDiv () {
    const {setCurUrl, setGameStart, pokes, setPokes, setSearch, perPokes, setPerPokes, totalPokes} = useContext(PokeListContext);
    const {isWinner,team, setTeam, teamA } = useContext(TeamContext);

    function choosePoke(id){
        if(team.length<3){
            setPokes(
                pokes.map(poke=>{
                    if(poke.id===id){
                        poke.isSelected=!poke.isSelected
                    }
                    return poke;
                })
            )
            setTeam([...teamA, ...pokes.filter(poke=>{
                if(poke.isSelected){
                    return poke;
                }
            })])   
        } else {
        }
        if(team.length>=2){
            setSearch(''); 
            setCurUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${perPokes}`);
            setGameStart(true);  
        }
    }


    return (
        <section className={pokes.length> perPokes ? 'pokesDiv scroll-active' : 'pokesDiv'}>
            {isWinner===undefined && 
                    pokes.map((poke)=>{
                        return <Poke_card
                            key={poke.id}
                            id={poke.id}
                            src={poke.src}
                            height={poke.height}
                            weight={poke.weight}
                            name={poke.name}
                            exp={poke.exp}
                            isSelected={poke.isSelected}
                            src_back={poke.src_back}
                            choosePoke={choosePoke}
                        />
                    })
            } 
            </section>
    )
}

export default CardsDiv;

