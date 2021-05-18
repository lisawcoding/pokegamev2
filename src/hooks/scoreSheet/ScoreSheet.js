import React, { useContext} from 'react';
import {v4 as uuid4} from 'uuid';

import {ScoreContext} from '../../contexts/ScoreContext';
import Score_round from './Score_round'
import '../../styles/ScoreSheet.scss';

function ScoreSheet(){
    const { scores } = useContext(ScoreContext);

    return(
           <div className='ScoreSheet'>
                    <section className='table'>
                        <ul className='top-div'>
                            <li>date</li>
                            <li>round</li>
                            <li className='score'>score</li>
                            <li className='win-lose'>win lose</li>
                            <li className='detail'>detail</li>
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
                                        key={uuid4()}
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