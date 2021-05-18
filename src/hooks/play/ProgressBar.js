import React,{ useEffect, useState, useContext } from "react";

import {TeamContext} from '../../contexts/TeamContext'

const ProgressBar = (props) => {
  const {
    winner
 } = useContext(TeamContext);

  const [width, setWidth]=useState(0)

  const containerStyles = {
    height: "2.7vw",
    width: '100%',
    backgroundColor: "grey",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    borderRadius: 'inherit',
    transition: 'all 1.2s',
    width: width,
    display: "flex",
    alignItems: "center"
  }

  const labelStyles = {
    fontSize: "1vw",
    color: 'white',
  }

  useEffect(()=>{
    if(winner==="")  return
    setWidth(`calc(${props.exp/2.9}%)`)
  }, [])

  return (
    <div className='ProgessBar'>
      <div style={containerStyles}>
        <div style={fillerStyles} className='filterStyle'>
          {winner!=="" && <span style={labelStyles}>{props.exp}</span>}
        </div>
      </div>
    </div>

  );
};

export default ProgressBar;