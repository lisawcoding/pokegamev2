
import React, {useContext, useEffect, useState} from 'react';
import {PokeListContext} from '../../contexts/PokelistContext';
import {TeamContext} from '../../contexts/TeamContext'
import '../../styles/SearchBar.scss'
import Hand from '../../hooks/Hand'

const SearchBar=(props)=>{
    const {
        search, setSearch,
        pokes
    }=useContext(PokeListContext);
    const {
        isYourTerm,
        notSelectedArr
    } = useContext(TeamContext)
    const inputRef=React.createRef()
    const [inputWidth, setInputWidth] = useState(0)

    const submitTeam=(e)=>{
        if(!isYourTerm) return
        setSearch(e.target.value);
    }

    const onfoucusout=()=>{
        console.log(pokes)
            // search.length>0 && pokes.length<1 && setSearch("")
            pokes.length<1 && setSearch("")
    }

    useEffect(()=>{
       if( inputRef.current===undefined) return
        console.log(inputRef.current.offsetWidth)
        setInputWidth(inputRef.current.offsetWidth )
    },[pokes])


    return(
        <div className="SearchBar-div">
            <div className='SearchBar' >
                    <input id='auto' type='text' 
                        value={search}
                        onChange={(e)=>{submitTeam(e)}}
                        onBlur={onfoucusout}
                        required
                        style={{width: search.length*3.5+6.2 + 'vw', padding: "0 2.5vw", maxWidth: "50vw"}}
                        ref={inputRef}
                    />
            </div>
            { notSelectedArr.length<1  && <Hand remark="try again" getInputWidth={inputWidth} />}  
            {/* <Hand remark="try again" getInputWidth={inputWidth} /> */}
        </div>
    )
}

export default SearchBar;