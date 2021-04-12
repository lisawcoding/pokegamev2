import React, { useContext } from 'react';
import {ScoreContext} from '../contexts/ScoreContext';
import ScoreDetailFormate from './ScoreDetailFormate';

function ScoreDetail(props) {
    const {teams, scores} = useContext(ScoreContext);
    const round=props.match.params.round;
    const id=Number(round.replace('round_', ''))-1;

    return (
        <div id={id} className='detail-frame'>
            <h1>{`round ${round}`}</h1>
            <div>{scores[id].win === true && <i className="fas fa-trophy"></i>}</div>
            <section>
                <ScoreDetailFormate team={teams[id].yourTeam} title='your  hand' score={scores[id].yourScore} />
                <ScoreDetailFormate team={teams[id].dealersTeam} title="dealer's hand" score={scores[id].dealerScore} />
            </section>
            <button onClick={props.history.goBack} className='index-btn'>Back</button>
        </div>
    )
}

export default ScoreDetail;