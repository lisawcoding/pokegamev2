import React, { useContext } from 'react';
import {withRouter} from 'react-router-dom'

function BG(props) {

    const bgUrl=()=>{
        if(props.location.pathname==='/') {
            return 'https://cdn.pixabay.com/photo/2020/04/23/20/13/space-5083905_960_720.jpg';
        } else if (props.location.pathname==='/pokeplay'){
            return 'https://cdn.pixabay.com/photo/2017/06/02/10/28/cartoons-2365895__340.jpg';
        } else {
            return 'https://cdn.pixabay.com/photo/2016/09/08/15/18/textured-1654610__340.jpg'
        }
    }

    return (
        <div className='bg' style={{backgroundImage: `url(${bgUrl()})`}} onClick={props.openFullscreen}>
            <iframe width="200" height="200" src="https://www.youtube.com/embed/vX1xq4Ud2z8?autoplay=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <div className='rotate-div'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ic_screen_rotation_48px.svg/1024px-Ic_screen_rotation_48px.svg.png' />
            </div>
        </div>
    )
}

export default withRouter(BG);