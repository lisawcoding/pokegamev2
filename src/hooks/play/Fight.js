import React, {useContext, useEffect, useState} from 'react';

// import TeamDiv from './TeamDiv';
import Fight_Card from './Fight_Card';
import Score_Div from './Score_Div';

// import { PokeListContext } from '../../contexts/PokelistContext';
import { TeamContext } from '../../contexts/TeamContext';
// import { InitValueContext } from '../../contexts/InitValueContext';
import '../../styles/Fight.scss'
// import ProgressBar from './ProgressBar';
import { ScoreContext } from '../../contexts/ScoreContext';

function Fight () {
    const {
        teams, setTeams,
        winner, setWinner
     } = useContext(TeamContext);
    const {
        scores, setScores
    } = useContext(ScoreContext)

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const yourArr=teams.yourTeam.map(elm => elm.exp);
    const dealerArr=teams.dealerTeam.map(elm=> elm.exp)    
    const yourTotalExp=yourArr.reduce(reducer)
    const dealerTotalExp=dealerArr.reduce(reducer)

    useEffect(()=>{
        if (winner==="") return

        setScores([...scores, {
            yourScore: yourTotalExp,
            dealerScore: dealerTotalExp,
            win: winner,
            date: new Date().toDateString(),
            teams: teams,
            check: 'check'
        }])
    }, [winner])


    return(
        <>
            <section className='Fight'>
                <div className='team'>
                    <Fight_Card 
                        title='yourTeam'
                        teams={teams.yourTeam}
                        winner={winner}
                        totalExp={yourTotalExp}
                    />                      
                </div>

                <Score_Div
                    yourArr={yourArr}
                    dealerArr={dealerArr}
                    yourTotalExp={yourTotalExp}
                    dealerTotalExp={dealerTotalExp}
                />                   
                <div className={ winner!==""? "overlay" : ""}></div>
                
                <div className='team dealer'>
                    <Fight_Card 
                        title='dealerTeam'
                        teams={teams.dealerTeam}
                        winner={winner}
                        totalExp={dealerTotalExp}
                    />              
                </div>
            </section>
        </>
    )
}

export default Fight;