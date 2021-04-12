import React from 'react';
import uuid from 'uuid';

function ScoreDetailFormate({team, title, score}) {
    console.log(team)
    return (
        <div className='members'>
            <h1>{title}</h1>
            <h1>{`total score: ${score}`}</h1>
            {team.map(t=>
                <div key={uuid()} className='member'>
                    <img src={t.src} alt={t.src} />
                    <img src={t.src_back} alt={t.src} />
                    <div className='info-div'>
                        <p>{t.name}</p>
                        <p>{`exp: ${t.exp}`}</p>
                        <p>{`height: ${t.height}`}</p>
                        <p>{`weight: ${t.weight}`}</p>                        
                    </div>
                </div>            
            )}
        </div>
    )
}

export default ScoreDetailFormate;