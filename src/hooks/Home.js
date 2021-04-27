import React from 'react';
import {
    BrowserRouter as Router,
    // WithRouter as Router,
    Link,
} from 'react-router-dom'
import '../styles/Home.scss'

function Home(props){

    return (
            <div className='Home'>
                <ul className='menu'>
                    <Link to='/play' className='index-btn' onClick={props.openFullscreen}><span>play now</span></Link>
                    <Link to='/scoresheet' className='index-btn'><span>scroe sheet</span></Link>
                </ul>
            </div>            
    )
}

export default Home;