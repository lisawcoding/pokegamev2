import React, {createContext, useState} from 'react';

export const TeamContext = createContext();

export function TeamProvider(props){
    // const [team, setTeam]=useState([]);
    // const [yourTeam, setYourTeam]=useState([]);
    // const [dealerTeam, setdealerTeam]=useState([]);
    // const [isWinner, setIsWinner]=useState(null);
    // const [selectedPokes, setSelectedPokes]=useState([])
    // const [selectedIDs, setSelectedIDs] = useState([1, 2, 3, 5, 9, 12])
    const [selectedIDs, setSelectedIDs] = useState([])
    const [teams, setTeams] = useState({
        yourTeam: [],
        dealerTeam: []
    })
    const [isYourTerm, setIsYourTerm] = useState(true)
    const [flipCard, setFlipCard] = useState({})
    const [fighting, setFighting] = useState(false)
    const [winner, setWinner] = useState("")
    const [notSelectedArr, setNotSelectedArr] = useState([])

    return (
       <TeamContext.Provider value={{
            selectedIDs, setSelectedIDs,
            teams, setTeams,
            isYourTerm, setIsYourTerm,
            flipCard, setFlipCard,
            fighting, setFighting,
            winner, setWinner,
            notSelectedArr, setNotSelectedArr
           }}>
           {props.children}
       </TeamContext.Provider> 
    )
}

