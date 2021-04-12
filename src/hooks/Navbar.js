import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    withRouter
} from "react-router-dom";

import SearchBar from './SearchBar';
import '../styles/Navbar.scss';

function Navbar (props){

    return (
        <>
        { props.location.pathname!=='/' &&
            <nav id='nav'>
                {props.location.pathname==='/pokeplay' ? <SearchBar/> : <div></div>}
                <ul ref={props.fullscreenModal}>
                    <button className='btn btn-animate tooltip fullscreenBtn' onClick={props.openFullscreen} >[]
                        <span className="tooltiptext">full screen</span>
                    </button>
                    <NavLink exact className='btn btn-white btn-animate tooltip' activeClassName='active-link' to='/' data-lan='tab'>
                        <i className="fas fa-home"></i><span className="tooltiptext">home</span>
                        </NavLink>
                    <NavLink exact className='btn btn-white btn-animate tooltip' activeClassName='active-link' to='/pokeplay' data-lan='tab'>
                        <i className="fas fa-play"></i><span className="tooltiptext">play game</span>
                        </NavLink>
                    <NavLink exact className='btn btn-white btn-animate tooltip scorelink' activeClassName='active-link' to='/scoresheet' data-lan='tab'>
                        <i className="fas fa-clipboard"></i><span className="tooltiptext">score sheet</span>
                        </NavLink>
                </ul>  
            </nav>         
        }
        </>
       




    )
}
  
export default withRouter(Navbar);


        // <Router>
        //     <nav>
        //     <p>google anytics, audio effect, resume photo automatic slider, https://www.pinterest.com/pin/377950593698690280/</p>
        //     <ul className='drop-down' onClick={dropDown}>
        //         <NavLink exact activeClassName='active-link' to='/' data-lan='tab'>Home</NavLink>
        //         <NavLink exact activeClassName='active-link' to='/pokeplay' data-lan='tab'>Play</NavLink>
        //         <NavLink exact activeClassName='active-link' to='/scoresheet' data-lan='tab'>Score</NavLink>
        //     </ul>

        //     <li className='hamburger' onClick={dropDown}><span></span><span></span><span></span></li>
        //         <ul className='language-div'>
        //             <li data-lan='en' onClick={changeLanguage} className={language === 'en' ? 'active-link' : ''}>en</li>
        //             <li data-lan='zh' onClick={changeLanguage} className={language === 'zh' ? 'active-link' : ''}>zh</li>
        //         </ul>  
        //         </nav>
        //     <Switch>
        //         <Route exact path='/'><Home/></Route>
        //         <Route exact path='/pokeplay' component={PokePlay}/>
        //         <Route exact path='/scoresheet'><ScoreSheet/></Route>
        //     </Switch>                 
        // </Router>
