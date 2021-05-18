import React, { useEffect, useReducer } from 'react';
import hand from "../images/hand.png";
import '../styles/hand.scss'

function Hand (props) {
    const handIconRef=React.useRef()

      let keyframes= `@keyframes pointLeft {
        0% {
          left: calc(${props.getInputWidth}px + 1.5vw + .5vw )
        }
        100% {
          left: calc(${props.getInputWidth}px + 1.5vw );
        }
      }`

    let styleSheet = document.styleSheets[0];

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    return (
        <div className="hand-icon" ref={handIconRef} style={{animation: props.remark.indexOf('try')!==-1 && `pointLeft .9s infinite linear`}}>
            <img src={hand} alt="hand"/>
            <h1>{props.remark}</h1>
        </div>       
    )
}

export default Hand;