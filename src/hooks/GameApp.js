import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch, 
  } from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';
import ScoreSheet from './scoreSheet/ScoreSheet';
import ScoreDetail from './scoreSheet/ScoreDetail';
import BG from './BG';
import {InitValueContext} from '../contexts/InitValueContext'

import Play from './play/Play';

function GameApp(props) {
  const {
    loading,
  } = useContext(InitValueContext)

    function openFullscreen() {
      // const elem = document.querySelector("#root");
      // if (elem.requestFullscreen) {
      //   elem.requestFullscreen();
      // } else if (elem.mozRequestFullScreen) { /* Firefox */
      //   elem.mozRequestFullScreen();
      // } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      //   elem.webkitRequestFullscreen();
      // } else if (elem.msRequestFullscreen) { /* IE/Edge */
      //   elem.msRequestFullscreen();
      // }
    }

    return(
      <>
      { 
        loading ? <div className='loader-wrapper'><div className='loader'></div></div> :
        <div className="GameApp">
          <Router>
            <BG openFullscreen={openFullscreen}/>
            <Navbar openFullscreen={openFullscreen}/>
            <Switch>
                <Route exact path='/' component={routeProps=><Home stuff={routeProps} openFullscreen={openFullscreen}/>} />
                {/* <Route exact path='/' component={Home} openFullscreen={openFullscreen} /> */}
                {/* <Route exact path='/pokeplay' render={()=><PokePlay/>}/> */}
                <Route exact path='/play' render={()=><Play/>}/>
                <Route exact path='/scoresheet' component={ScoreSheet} />                
                <Route exact path='/scoresheet/detail/:round' component={ScoreDetail} /> 
            </Switch> 
          </Router>    
        </div>          
      }
      </>
    )
}

export default GameApp;