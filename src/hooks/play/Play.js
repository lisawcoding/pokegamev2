import React, {useContext} from 'react';

import { TeamContext } from '../../contexts/TeamContext';
import { InitValueContext} from '../../contexts/InitValueContext'

import CardsDiv from './CardsDiv';
import Fight from './Fight';
import '../../styles/Play.scss';
import SearchBar from './SearchBar';


function Play (props) {
    const { 
        fighting,
        isYourTerm 
    } = useContext(TeamContext)
    const {
        loading
      } = useContext(InitValueContext)

    return (
        <div className="play-pannel" style={{minWidth: props.vh}} >
                {fighting? 
                    <Fight /> :
                    <>
                    {isYourTerm &&<SearchBar />}
                    <CardsDiv vh={props.vh} /> 
                    </>
                }
        </div>
    )
}

export default Play;