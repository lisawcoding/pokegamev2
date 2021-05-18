import React from 'react';
import {withRouter} from 'react-router-dom';
import rotate from "../images/rotate.png"

function BG(props) {
    const bgUrl=()=>{
        if(props.location.pathname.indexOf('score')>0) {
            return 'https://cdn.pixabay.com/photo/2016/09/08/15/18/textured-1654610__340.jpg';
        } else if (props.location.pathname.indexOf('play')>0){
            return 'https://cdn.pixabay.com/photo/2017/06/02/10/28/cartoons-2365895__340.jpg';
        } else {
            return 'https://cdn.pixabay.com/photo/2020/04/23/20/13/space-5083905_960_720.jpg'
        }
    }

    return (
        <div className='bg' style={{backgroundImage: `url(${bgUrl()})`}} onClick={props.openFullscreen}>
            <div className='rotate-div'>
            <iframe src="https://www.youtube.com/embed/vX1xq4Ud2z8?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=vX1xq4Ud2z8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <img src={rotate} alt="rotate image" />
            </div>
        </div>
    )
}

export default withRouter(BG);


