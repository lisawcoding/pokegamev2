
import React from 'react';

const Card=(props)=>{

    props.selectedIDs.map(id=>{
        if(id===props.poke.id){
            props.poke.isSelected=true;
            props.teams.yourTeam.map(item=>{
                if(item.id===props.poke.id) props.poke.team='yourTeam'
            })
            props.teams.dealerTeam.map(item=>{
                if(item.id===props.poke.id) props.poke.team="dealerTeam"
            })
        }
    })

    return (
        <div className={`Card 
            ${props.poke.isSelected && props.selectedIDs.length>0 && `isSelected`} 
            ${props.selectedIDs.length>0 && props.poke.team} 
        `}
        onClick={()=>{!props.poke.isSelected && props.isYourTerm && props.youPickPoke(props.poke.id)}} 
        >
            <div 
                className="flip-card"
                key={props.poke.id} 
                id={props.poke.id} 
                value={props.poke.id}
                >
                <div className={`flip-card-inner 
                    ${props.isYourTerm && "fliphover"} 
                    ${props.poke.id===props.isFlipCard.id && !props.isYourTerm && "flip-infinite"}
                    ${props.selectedIDs.length>=props.round*2 && 'flip-delay'}
                `}>
                    <div className='flip-card-front'>
                        <div className='img-wrapper'>
                        <img src={props.poke.src} alt={props.poke.name}/> 
                        </div>
                        <h2 className='name'>{props.poke.name}</h2>
                    </div>
                    <div className='flip-card-back'>
                        <img src={props.poke.src_back}/>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Card;