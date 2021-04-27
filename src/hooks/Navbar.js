import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    withRouter
} from "react-router-dom";

import Hand from './Hand';
import fullscreen from '../images/fullscreen.svg'
import home from '../images/home.png'
import play from '../images/play.png'
import score from '../images/score.png'

import '../styles/Navbar.scss';
import { TeamContext } from '../contexts/TeamContext';
import { InitValueContext } from '../contexts/InitValueContext';
import { PokeListContext } from '../contexts/PokelistContext';

function Navbar (props){
    const {
        selectedIDs, setSelectedIDs,
        teams, setTeams,
        isYourTerm, setIsYourTerm,
        fighting, setFighting,
        winner, setWinner
    } = useContext(TeamContext)

    const {
        perPokes, setPerPokes,
        apiUrl,
    } = useContext(InitValueContext)

    const {
        curUrl, setCurUrl,
    } = useContext(PokeListContext)


    const replay=()=>{
        if(winner==="") return
        setCurUrl(`${apiUrl}${perPokes}`)
        setSelectedIDs([])
        setTeams({
            yourTeam:[],
            dealerTeam:[]
        })
        setIsYourTerm(true)
        setFighting(false)
        setWinner("")
    }

    return (
        <>
        { props.location.pathname!=='/' && (selectedIDs.length<1 | winner.length>0) &&
            <nav id='nav'>
                <div></div>
                <ul ref={props.fullscreenModal}>
                    <button className='btn btn-animate tooltip fullscreenBtn' onClick={props.openFullscreen} >
                        <img src={fullscreen} alt="full screen" />
                        <span className="tooltiptext">full screen</span>
                    </button>
                        <li>
                            <NavLink exact className='btn btn-white btn-animate tooltip' activeClassName='active-link' to='/'>
                                <img src={home} alt="home-icon" /><span className="tooltiptext">home</span>
                                </NavLink>
                            <NavLink exact className='btn btn-white btn-animate tooltip play-btn' activeClassName='active-link' to='/play' onClick={replay}>
                                <img src={play} alt="play-icon" />
                                { winner === "" ? <span className="tooltiptext">play game</span> : <Hand remark="play again" />}
                                </NavLink>
                            <NavLink exact className='btn btn-white btn-animate tooltip scorelink' activeClassName='active-link' to='/scoresheet'>
                                <img src={score} alt="score-icon"/><span className="tooltiptext">score sheet</span>
                                </NavLink>    
                        </li>
                </ul>  
            </nav>         
        }
        </>
    )
}
  
export default withRouter(Navbar);
