import React from 'react';
import {v4 as uuid4} from 'uuid';
import {Link} from 'react-router-dom'
import trophy from '../../images/trophy.png'
import tired from '../../images/tired.png'
import detail from '../../images/detail.png'


const Score_round = (props) => {

    return (
        <ul className='round' key={uuid4()}>
            <li>{props.date}</li>
            <li>{props.round}</li>
            <li>{props.yourScore}</li>
            <li>{props.dealerScore}</li>
            <li>{props.yourScore>props.dealerScore ? <img src={trophy} alt="trophy" /> : <img src={tired} alt='tired icon' />}</li>
            <li><Link to={`scoresheet/detail/round_${props.round}`}><img src={detail} alt="detail icon" /></Link></li>
        </ul>
    )
}

export default Score_round;