import React, {useState, useEffect, useContext} from 'react'

import {TeamContext} from '../../contexts/TeamContext'

function Score_Div (props){
    const {
        isWinner, setIsWinner, 
        selectedIDs, setSelectedIDs,
        teams, setTeams,
        isYourTerm, setIsYourTerm,
        // isFlipCard, setIsFlipCard,
        winner, setWinner
     } = useContext(TeamContext);

    const [yourScore, setYourScore] = useState(0)
    const [dealerScore, setDealerScore] = useState(0)  
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


    useEffect(()=>{
        // async function main(n, arr, setFunc) {
        //     await delay(1200)
        //     for (let i = 0; i < arr.length; i++) {
        //         await delay(200);
        //         n=n+arr[i]
        //         setFunc(n)
        //     }

        //     await delay(1200)
        //     setWinner(props.yourTotalExp>props.dealerTotalExp ? "you" : "dealer")
        // }

        // console.log(props.yourArr)
        // main(0, props.yourArr, setYourScore)
        // main(0, props.dealerArr, setDealerScore)    
        
        const showScore=async(n, arr, setFunc)=>{
            for (let i = 0; i < arr.length; i++) {
                await delay(200);
                n=n+arr[i]
                setFunc(n)
            }
        }
        
        const main=async()=> {
            await delay(1200)
            console.log(props.yourArr)
            showScore(0, props.yourArr, setYourScore)
            showScore(0, props.dealerArr, setDealerScore)   

            await delay(1200)
            setWinner(props.yourTotalExp>props.dealerTotalExp ? "you" : "dealer")
        }
        main()



    }, [])

    return(
        <div className='score-div'> 
            {winner===""? 
            <>
                <h1 className='yourTeam'>{yourScore}</h1>
                <span>vs</span>
                <h1 className='dealerTeam'>{dealerScore}</h1>   
            </> :
            <h1 className="win">{`${winner} win`}</h1>
            }             
        </div>
    )
}

export default Score_Div;