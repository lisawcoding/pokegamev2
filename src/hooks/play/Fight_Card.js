import React from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import {v4 as uuid4} from 'uuid'

import Card from './Card'
import ProgressBar from './ProgressBar';

function TeamDiv (props) {

    return(
        <>
        {/* <h1 style={{color: 'tomato'}}>{props.title}</h1> */}
            
            {
                props.winner!=="" && <h1>{props.title.replace("Team", " hand")}: {props.totalExp}</h1>
            }
            
            <div className={ `TeamDiv ${props.title}`} style={{flexDirection: props.title==='yourTeam'? 'row-reverse' : ''}}>
                
                {
                    props.teams.length>0 && 
                    <>
                       { props.teams.map(item=>
                        <li key={uuid4()} className="each-poke">
                            {/* <p>{item.id}</p> */}
                            <div className='img-wrapper'>
                                {/* <p>{item.id}</p> */}
                                <img src={item.src_shiny} alt={item.name}  className={props.winner!=="" ? "notransition" : ""} />
                            </div>
                            <div className='ProgessBar'>
                                {/* <p>{props.exp}</p> */}
                                <ProgressBar 
                                    exp={item.exp} 
                                    // item={item}
                                    // title={props.title}
                                    />
                            </div>                    
                        </li>
                          
                        )}
                    </>
                }
            </div>        
        </>
    )
}

export default TeamDiv;