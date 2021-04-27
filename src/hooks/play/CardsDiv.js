import React, { useContext, useEffect, useState } from 'react';
import {v4 as uuid4} from 'uuid'

import Card from './Card';
import Pagination from './Pagination';
import TeamDiv from './TeamDiv';
import Hand from '../Hand';

import { PokeListContext } from '../../contexts/PokelistContext';
import { TeamContext } from '../../contexts/TeamContext';
import { InitValueContext } from '../../contexts/InitValueContext';

import '../../styles/CardsDiv.scss';
import ball from "../../images/ball.svg"

function CardsDiv () {
    const {
        pokes, setPokes, 
        search, setSearch, 
        curUrl, setCurUrl,
    } = useContext(PokeListContext);
    const {
        selectedIDs, setSelectedIDs,
        teams, setTeams,
        isYourTerm, setIsYourTerm,
        fighting, setFighting,
        notSelectedArr, setNotSelectedArr
     } = useContext(TeamContext);
     const {
        totalPokes,
        perPokes, setPerPokes,
        round, setRound,
     } = useContext(InitValueContext)

     const [isFlipCard, setIsFlipCard] = useState({});
     const [urlOffset, setUrlOffset] = useState(null)

     const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
     const flipLoop = (arr, pickedPoke)=> {
        let flip=setInterval(async()=>{
            let randomFlipNum = Math.floor(Math.random()*arr.length)
            setIsFlipCard(arr[randomFlipNum])
            let isFlipCardId=arr[randomFlipNum].id;

            arr=arr.filter(elm=>elm.id!==isFlipCardId)

            if(isFlipCardId===pickedPoke.id || arr.length<1){
                
                clearInterval(flip)
                await delay(500)

                setSelectedIDs([...selectedIDs, pickedPoke.id])
                setTeams({...teams, dealerTeam: [...teams.dealerTeam, pickedPoke]})
                setIsFlipCard({})

                if(selectedIDs.length<round*2-1){
                    await delay(500)
                    setIsYourTerm(true)
                } else {
                    await delay(1500)
                    setFighting(true)
                }
            }
        }, 500)      
    }
    
    function youPickPoke(id){
        if(!isYourTerm) return

        setIsYourTerm(false)
        setSelectedIDs([...selectedIDs, id])
        setTeams({...teams, yourTeam: [...teams.yourTeam, this.poke]})
    }

    useEffect(()=>{
        if(isYourTerm) return
        if(search.length>0) setSearch("")

        var random=Math.floor(Math.random() * (totalPokes/perPokes).toFixed(0))
        console.log(random)

        while(random===Number(urlOffset)/5){ 
            random=Math.floor(Math.random() * (totalPokes/perPokes).toFixed(0))
            console.log(random)
        }

        setCurUrl(`https://pokeapi.co/api/v2/pokemon?offset=${random*perPokes}&limit=${perPokes}&v=${uuid4()}`)

    },[isYourTerm, urlOffset])

    useEffect(()=>{
        setNotSelectedArr(()=>pokes.filter(p=>p.isSelected===false))

        if(isYourTerm || selectedIDs.length>=round*2 ) return

        let arr=pokes.filter(p=>p.isSelected===false)    
        let pickedPoke=arr[Math.floor(Math.random()*arr.length)]
    
        arr.length>1 ? flipLoop(arr, pickedPoke) : setUrlOffset(new URL(curUrl).searchParams.get("offset"))
        
    }, [pokes])

    return (
        <>
            <section className='team-zone'>
                <TeamDiv 
                    title='dealerTeam'
                    teams={teams.dealerTeam}
                    isYourTerm={isYourTerm}
                 /> 
            <div className="title-div">
                <div className="icon-wrapper">
                    {!isYourTerm ? 
                        <div className="ball-div">
                            <img src={ball} alt="ball" />
                            <h1 className='is-your-term'>{pokes.length>0 ? "wait!" : "cannot find pokes"}</h1>  
                        </div>:(notSelectedArr.length>0 && <Hand remark="pick one" /> )
                    }   
                </div>  
            </div>
                <TeamDiv 
                    title='yourTeam'
                    teams={teams.yourTeam}
                    isYourTerm={isYourTerm}
                />  
            </section>
                <section className="play-zone">
                    <div className={pokes.length> perPokes ? 'pokesDiv scroll-active' : 'pokesDiv' }>
                        { pokes.map((poke)=>{
                            return <Card
                                        poke={poke}
                                        key={uuid4()}
                                        youPickPoke={youPickPoke}
                                        isYourTerm={isYourTerm}
                                        isFlipCard={isFlipCard}
                                        teams={teams}
                                        selectedIDs={selectedIDs}
                                        round={round}
                                    />
                            })
                        } 
                    </div>
                    {isYourTerm==true && <Pagination/>}
                </section>
        </>
    )
}

export default CardsDiv;

