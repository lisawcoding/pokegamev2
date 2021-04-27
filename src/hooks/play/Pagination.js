import React, { useContext } from 'react';

import { InitValueContext } from '../../contexts/InitValueContext';
import { PokeListContext } from '../../contexts/PokelistContext';
import { TeamContext } from '../../contexts/TeamContext';

function Pagination (){
    const {curUrl, setCurUrl, nextUrl, prevUrl, loading, search}=useContext(PokeListContext);
    const {
        // loading, setLoading,
        totalPokes,
        perPokes, setPerPokes,
        // apiUrl,
     } = useContext(InitValueContext)


    function goNextUrl(){
        // var next=new URLSearchParams(new URL(nextUrl).search).get("offset")
        // if(Number(next)+perPokes>totalPokes){
        //     console.log('stop')
        // }
        // setTeamA(team)
        // console.log(curUrl)
        // console.log(nextUrl)
        setCurUrl(nextUrl);
    }
    function goPrevUrl(){
        // setTeamA(team)
        setCurUrl(prevUrl);
    }

    const styleP={
        display: search.length>0 ? 'none': 'block'
    }

    return (
        <div className='pagination' style={styleP}>
            <button onClick={goPrevUrl} disabled={loading} className='prev' style={{display: prevUrl===null && 'none'}}></button>
            {
                Number(new URLSearchParams(new URL(nextUrl).search).get("offset"))<totalPokes && 
                <button onClick={goNextUrl} disabled={loading} className='next' style={{display: nextUrl===null && 'none'}}></button>
            }
        </div>        
    )
}

export default Pagination;