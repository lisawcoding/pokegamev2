
import React, {useContext} from 'react';
import {PokeListContext} from '../../contexts/PokelistContext';
import {TeamContext} from '../../contexts/TeamContext'
import '../../styles/SearchBar.scss'
import Hand from '../../hooks/Hand'

const SearchBar=()=>{
    const {
        search, setSearch
    }=useContext(PokeListContext);
    const {
        isYourTerm,
        notSelectedArr
    } = useContext(TeamContext)
    
    const submitTeam=(e)=>{
        if(!isYourTerm) return
        setSearch(e.target.value);
    }
    
    return(
        <div className='SearchBar'>
                <input id='auto' type='text' 
                    value={search}
                    onChange={(e)=>{submitTeam(e)}}
                    required
                />
                {notSelectedArr.length<1 && <Hand remark="type again" />}  
        </div>
    )
}

export default SearchBar;