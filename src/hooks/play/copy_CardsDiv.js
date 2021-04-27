import React, { useContext, useEffect, useState } from 'react';
import {v4 as uuid4} from 'uuid'

import Card from './Card';
import Pagination from './Pagination';
import TeamDiv from './TeamDiv';
import Fight from './Fight';

import { PokeListContext } from '../../contexts/PokelistContext';
import { TeamContext } from '../../contexts/TeamContext';
import { InitValueContext } from '../../contexts/InitValueContext';

import '../../styles/CardsDiv.scss';
import ball from "../../images/ball.svg"

function CardsDiv () {
    const {
        // setGameStart, 
        pokes, setPokes, 
        search, setSearch, 
        curUrl, setCurUrl,
        nextUrl, setNextUrl, 
        prevUrl, setPrevUrl,
        // perPokes, setPerPokes, 
        // totalPokes
    } = useContext(PokeListContext);
    const {
        // isWinner,
        // team, setTeam, 
        // YourTeam, DealerTeam,
        selectedIDs, setSelectedIDs,
        teams, setTeams,
        isYourTerm, setIsYourTerm,
        fighting, setFighting,
        winner, setWinner
        // isFlipCard, setIsFlipCard
     } = useContext(TeamContext);
     const {
        // loading, setLoading,
        totalPokes,
        perPokes, setPerPokes,
        // apiUrl,
        round, setRound,
        
     } = useContext(InitValueContext)

     const [isFlipCard, setIsFlipCard] = useState({});
     const [urlOffset, setUrlOffset] = useState("")
     const [allPokeIdArr, setAllPokeIdArr] = useState([])

     const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
     const flipLoop = (arr, pickedPoke)=> {
        let flip=setInterval(async()=>{
            let randomFlipNum = Math.floor(Math.random()*arr.length)
            setIsFlipCard(arr[randomFlipNum])
            let isFlipCardId=arr[randomFlipNum].id;

            console.log(isFlipCardId)

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
        setSelectedIDs([...selectedIDs, id])
        setTeams({...teams, yourTeam: [...teams.yourTeam, this.poke]})
        setIsYourTerm(false)
    }

    // useEffect(()=>{
    //     if(isYourTerm) return
    //     if(search.length>0) setSearch("")
    //     // setIsFlipCard({})

    //     let random=Math.floor(Math.random() * (totalPokes/perPokes).toFixed(0))

    //     setCurUrl(`https://pokeapi.co/api/v2/pokemon?offset=${random*perPokes}&limit=${perPokes}&v=${uuid4()}`)
    //     console.log(random)
    // },[isYourTerm])


    useEffect(()=>{
        if(isYourTerm || selectedIDs.length>=round*2 ) return


        let allPokeIdArr=[...Array(totalPokes+1).keys()].slice(1, totalPokes+1).filter(item=>!selectedIDs.includes(item))
        console.log(allPokeIdArr)

        let dealerPickedId=allPokeIdArr[Math.floor(Math.random() * allPokeIdArr.length.toFixed(0))]
        console.log(dealerPickedId)
        setCurUrl(`https://pokeapi.co/api/v2/pokemon?offset=${Math.floor((dealerPickedId-1)/perPokes)*perPokes}&limit=${perPokes}&v=${uuid4()}`)
    
        
        // var arr=pokes
        // arr=arr.filter(item=>!selectedIDs.includes(item.id) )
        
        // arr.length>1 ? flipLoop(arr, pickedPoke) : setUrlOffset(new URL(curUrl).searchParams.get("offset"))
        
    }, [isYourTerm])

    useEffect(()=>{

        const flip=()=>{
            let flipLoop=()=>{
                var flipArr=pokes.filter(poke=>!poke.isSelected)
                console.log(flipArr)

                setIsFlipCard(flipArr[Math.floor(Math.random()*4)])                
            }
        }



    },[pokes])

    return (
        <>
        {/* <h1 style={{color: 'tomato'}}>{selectedIDs}</h1> */}
        <main  className='play-zone'>
            <section className='team-zone'>
                <TeamDiv 
                    title='dealerTeam'
                    teams={teams.dealerTeam}
                    isYourTerm={isYourTerm}
                 /> 
            <div className="title-div">
                {
                    isYourTerm && 
                    <>
                        <img src={ball} alt="ball" />
                        <h1 className='is-your-term'>pick a poke</h1>  
                    </>
                    }              
            </div>
                <TeamDiv 
                    title='yourTeam'
                    teams={teams.yourTeam}
                    isYourTerm={isYourTerm}
                />  
            </section>
             {
                !fighting &&              
                <section className="card-div-wrapper">
                    <div className={pokes.length> perPokes ? 'pokesDiv scroll-active' : 'pokesDiv' }>
                        {winner==="" && 
                                pokes.map((poke)=>{
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
              }  
        </main>
        </>
    )
}

export default CardsDiv;

