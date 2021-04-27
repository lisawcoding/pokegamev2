import React, {useContext} from 'react';

import { TeamContext } from '../../contexts/TeamContext';

import CardsDiv from './CardsDiv';
import Fight from './Fight';
import '../../styles/Play.scss';
import SearchBar from './SearchBar';


function Play () {
    const { fighting } = useContext(TeamContext)

    return (
        <div className="Play">
            <div className='main-wrapper' >
                {!fighting? <><SearchBar /><CardsDiv /> </>: <Fight />}
            </div>
        </div>
    )
}

export default Play;