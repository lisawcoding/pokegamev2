import React from 'react';
import uuid from 'uuid';
import {Link} from 'react-router-dom'


const Score_round = (props) => {

    return (
        <ul className='round' key={uuid()}>
            <li>{props.date}</li>
            <li>{props.round}</li>
            <li>{props.yourScore}</li>
            <li>{props.dealerScore}</li>
            <li>{props.yourScore>props.dealerScore ? <i className="fas fa-trophy"></i> : <i class="fas fa-tired"></i>}</li>
            <li><Link to={`scoresheet/detail/round_${props.round}`}><i className="fas fa-book"></i></Link></li>
        </ul>
    )
}

export default Score_round;