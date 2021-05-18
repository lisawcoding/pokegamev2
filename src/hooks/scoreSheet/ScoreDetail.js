import React, { useContext } from 'react';
import {ScoreContext} from '../../contexts/ScoreContext';
import ScoreDetailFormate from './ScoreDetailFormate';

function ScoreDetail(props) {
    const {scores} = useContext(ScoreContext);
    const round=props.match.params.round;
    const num=Number(round.replace('round_', ''))-1;

    return (
        <div className="ScoreDetail">
            <div num={num} className='detail-frame'>
                <h1>{`round ${round}`}</h1>
                <div>{scores[num].win === true && <i className="fas fa-trophy"></i>}</div>
                <section>
                    <ScoreDetailFormate team={scores[num].teams.yourTeam} title='your hand' score={scores[num].yourScore} />
                    <ScoreDetailFormate team={scores[num].teams.dealerTeam} title="dealer's hand" score={scores[num].dealerScore} />
                </section>
                <button onClick={props.history.goBack} className='index-btn'>Back</button>
            </div>            
        </div>
    )
}

export default ScoreDetail;