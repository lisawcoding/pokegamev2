import React from 'react';
import {
    // BrowserRouter as Router,
    // WithRouter as Router,
    Link,
} from 'react-router-dom'
import '../styles/Home.scss'

function Home(props){

    return (
            <div className='Home' onClick={props.openFullscreen}>
                <ul className='menu'>
                {/* <h1>v1</h1><br/> */}
                    <Link to='/play' className='index-btn'><span>play now</span></Link>
                    <Link to='/scoresheet' className='index-btn'><span>scroe sheet</span></Link>
                </ul>
            </div>            
    )
}

export default Home;