
import React, {useContext} from 'react';
import { TeamContext } from '../contexts/TeamContext';

const Poke_card=(props)=>{
    const {team} =useContext(TeamContext);

    if(team.length>0){
        for(var i=0; i<team.length; i++){
            if(props.id===team[i].id){
                return props.isSelected===true
            }               
        }
    }

    return (
        <div className='pokeCard'>
            <div className='flip-card' key={props.id} id={props.id} onClick={()=>{props.choosePoke(props.id)}} value={props.id}>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                            <p className='exp' data-exp={`${props.exp}`}></p>
                            <div className='img-wrapper'>
                            <img src={props.src} alt={props.name}/> 
                            </div>
                            <h2 className='name'>{props.name}</h2>
                    </div>
                    <div className='flip-card-back'>
                            <img src={props.src_back}/>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Poke_card;