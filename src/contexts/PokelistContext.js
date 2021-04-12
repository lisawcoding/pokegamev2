import React, {createContext, useState, useEffect } from 'react';

export const PokeListContext = createContext();

export function PokeListProvider (props) {
   
    const [totalPokes] = useState(365);
    const [perPokes, setPerPokes]=useState(12);
    const [pokes, setPokes]=useState([]);
    const [curUrl, setCurUrl]=useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${perPokes}`);
    // const [curUrl, setCurUrl]=useState()
    const [nextUrl, setNextUrl]=useState('');
    const [prevUrl, setPrevUrl]=useState('');
    const [loading, setLoading]=useState(true);

    const [search, setSearch]=useState('');
    const [gameStart, setGameStart]=useState(false);


    // const url=(search.length>0 || gameStart===true? 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=18' : curUrl)
    useEffect(()=>{
        // console.log('RUN useEffect')
        const url=(search.length>0? `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${totalPokes}` : curUrl)
        async function fetchList(){
            const res=await fetch(url);
            // const res=await fetch(curUrl);
            const data=await res.json();
            setNextUrl(data.next);
            setPrevUrl(data.previous);

            setPokes(
                await Promise.all(
                    data.results
                    .filter(({name})=>name.indexOf(search.toLowerCase())>-1)
                    // .slice(0, 120)
                    .map(result=>{
                        let pokeRecord=fetch(result.url)
                        .then(res=>res.json())
                        .then(data=>{
                            // return data
                            return ({
                                id: data.id,
                                name: data.name,
                                height: data.height,
                                weight: data.weight,
                                exp: data.base_experience,
                                src: data.sprites.front_default,
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

    }, [curUrl, search, gameStart])

    return(
        <PokeListContext.Provider value={{
            pokes, setPokes,
            curUrl, setCurUrl,
            nextUrl, setNextUrl, 
            prevUrl, setPrevUrl,
            // loading, setLoading,
            search, setSearch,
            gameStart, setGameStart,
            perPokes, setPerPokes,
            totalPokes
            }}>    
            <>
                {props.children}
            </>
        </PokeListContext.Provider>
    )
}