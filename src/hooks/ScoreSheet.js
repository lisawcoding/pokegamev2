import React, { useContext} from 'react';
import uuid from 'uuid';

import {ScoreContext} from '../contexts/ScoreContext';
import Score_round from './Score_round'
import '../styles/ScoreSheet.scss';

function ScoreSheet(props){
    const { scores } = useContext(ScoreContext);

    return(
           <div className='ScoreSheet'>
                    <h1>Pokemon Game</h1>
                    <h2>Score Sheet</h2>
                    <section className='table'>
                        <ul className='top-div'>
                            <li className='title'></li>
                            <li className='title'></li>
                            <li className='score'>score</li>
                            <li className='win-lose'>win lose</li>
                            <li className='detail'>detail</li>
                            <li>date</li>
                            <li>round</li>
                            <li>you</li>
                            <li>dealer</li>
                        </ul>
                        <ul className='data-div'>
                            {scores.map((score, index)=>{
                                return (
                                    <Score_round
                                        id={index}
                                        yourScore={score.yourScore}
                                        dealerScore={score.dealerScore}
                                        win={score.isWinner}
                                        key={uuid()}
                                        round={index+1}
                                        date={score.date}
                                    />
                                )
                            })}
                        </ul>
                    </section>
            </div>     
    )
}

export default ScoreSheet;