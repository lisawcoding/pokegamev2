import React from 'react'
import {v4 as uuid4} from 'uuid'

import Card from './Card'

function TeamDiv (props) {
    return(
        <>
        {/* <h1 style={{color: 'tomato'}}>{props.title}</h1> */}
            <div className={`TeamDiv ${props.title}`} style={{flexDirection: props.title==='yourTeam'? 'row-reverse' : ''}}>
                {
                    props.teams.length>0 && 
                    <>
                       { props.teams.map(item=>
                            // <li key={uuid4()} className='img-wrapper'>
                                <img src={item.src} alt={item.name}  key={uuid4()}/>
                            // </li>                           
                        )}
                    </>
                }
            </div>        
        </>
    )
}

export default TeamDiv;