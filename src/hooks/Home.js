import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'

import '../styles/Home.scss'

function Home(props){
    console.log(props)
    return (
            <div className='Home' onClick={props.openFullscreen}>
                <ul className='menu'>
                    <Link to='/pokeplay' className='index-btn'><span>start game</span></Link>
                    <Link to='/scoresheet' className='index-btn'><span>scroe sheet</span></Link>
                </ul>
            </div>            
    )
}

export default Home;