import React from 'react';;

const Team_div=(props)=>{
    
    return(
        <section className='teamDiv'>
            <h2>{props.isWinner!==undefined && props.hand}</h2>
            <p>{props.isWinner!==undefined && `total experience: ${props.exp}`}</p>
            {props.team.map(t=>
                <div key={`team${t.name}`} className='card'>
                    <img src={t.src} alt={t.name} className={t.isWinner!==undefined ? 'teamDiv-img-active': ''}/>
                    <p className='exp'>{props.isWinner!==undefined && `exp:${t.exp}`}</p>
                </div>
            )}
        </section>
    )
}

export default Team_div;