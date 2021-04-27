import React, {createContext, useState, useEffect, useContext } from 'react';

import { InitValueContext } from './InitValueContext';
import { TeamContext } from './TeamContext'

export const PokeListContext = createContext();

export function PokeListProvider (props) {
    const {
        loading, setLoading,
        totalPokes,
        perPokes, setPerPokes,
        apiUrl,
    } = useContext(InitValueContext);
   
    const [curUrl, setCurUrl]=useState(`${apiUrl}${perPokes}`);
    const [pokes, setPokes]=useState([]);
    const [nextUrl, setNextUrl]=useState('');
    const [prevUrl, setPrevUrl]=useState('');
    const [search, setSearch]=useState('');
    
    useEffect(()=>{
        const url=(search.length>0? `${apiUrl}${totalPokes}` : curUrl)

        async function fetchList(){
            const res=await fetch(url);
            const data=await res.json();

            setNextUrl(data.next);
            setPrevUrl(data.previous);

            setPokes(
                await Promise.all(
                    data.results
                    .filter(({name})=>name.indexOf(search.toLowerCase())>-1)
                    .slice(0, 120)
                    .map(result=>{
                            let pokeRecord=fetch(result.url)
                            .then(res=>res.json())
                            .then(data=>{
                                // console.log(data.base_experience)
                                    return ({
                                        id: data.id,
                                        name: data.name,
                                        height: data.height,
                                        weight: data.weight,
                                        exp: data.base_experience,
                                        src: data.sprites.front_default,
                                        src_shiny: data.sprites.front_shiny,
                                        src_back: data.sprites.back_default,
                                        isSelected: false
                                    })    
                            })
                            .catch(err=>console.log(err))
                            return pokeRecord;      
                    })
                )
            )
            setLoading(false)
        }
        fetchList();
    }, [curUrl, search])

    return(
        <PokeListContext.Provider value={{
            pokes, setPokes,
            curUrl, setCurUrl,
            nextUrl, setNextUrl, 
            prevUrl, setPrevUrl,
            search, setSearch,
            }}>    
            <>
                {props.children}
            </>
        </PokeListContext.Provider>
    )
}