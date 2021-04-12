import React, { useContext } from 'react';
import {PokeListContext} from '../contexts/PokelistContext';
import { TeamContext } from '../contexts/TeamContext';

function Pagination (){
    const {setCurUrl, nextUrl, prevUrl, loading, search}=useContext(PokeListContext);
    const {team, setTeamA} = useContext(TeamContext)


    function goNextUrl(){
        setTeamA(team)
        setCurUrl(nextUrl);
    }
    function goPrevUrl(){
        setTeamA(team)
        setCurUrl(prevUrl);
    }

    const styleP={
        display: search.length>0 ? 'none': 'block'
    }

    return (
        <div className='pagination' style={styleP}>
            <button onClick={goPrevUrl} disabled={loading} className='prev' style={{opacity: prevUrl===null && 0}}></button>
            <button onClick={goNextUrl} disabled={loading} className='next' style={{opacity: nextUrl===null && 0}}></button>
        </div>          
    )
}

export default Pagination;