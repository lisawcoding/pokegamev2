import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch, 
  } from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';
import Play from './play/Play';
import ScoreSheet from './scoreSheet/ScoreSheet';
import ScoreDetail from './scoreSheet/ScoreDetail';
import BG from './BG';
import {InitValueContext} from '../contexts/InitValueContext'

function GameApp(props) {
  const {
    loading,
  } = useContext(InitValueContext)

  

  if(loading) return <div className='loader-wrapper'><div className='loader'></div></div>;

  function openFullscreen() {
     const elem = document.querySelector(".GameApp"); 
     if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
}

    return(
        // loading ? <div className='loader-wrapper'><div className='loader'></div></div> :
        <div className="GameApp">
          <Router>
            <BG openFullscreen={openFullscreen}/>
            <Navbar openFullscreen={openFullscreen}/>
            <Switch>
                <Route exact path='/' component={routeProps=><Home stuff={routeProps} openFullscreen={openFullscreen}/>} />
                <Route exact path='/play' render={()=><Play vh={window.screen.availHeight} />}/>
                <Route exact path='/scoresheet' component={ScoreSheet} />                
                <Route exact path='/scoresheet/detail/:round' component={ScoreDetail} /> 
                <Route component={routeProps=><Home stuff={routeProps} openFullscreen={openFullscreen}/>} />
            </Switch> 
          </Router>    
        </div>     
    )
}

export default GameApp;