import React from 'react';
import hand from "../images/hand.png";
import '../styles/hand.scss'

function Hand (props) {

    return (
        <div className="hand-icon" >
            <img src={hand} alt="hand"/>
            <h1>{props.remark}</h1>
        </div>       
    )
}

export default Hand;