import React,{ useEffect, useState, useContext } from "react";

import {TeamContext} from '../../contexts/TeamContext'

const ProgressBar = (props) => {
  const {
    isWinner, setIsWinner, 
 } = useContext(TeamContext);

  const [width, setWidth]=useState(0)

  const containerStyles = {
    height: 20,
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
  }

  const labelStyles = {
    padding: 5,
    fontSize: "12px",
    color: 'white',
    // fontWeight: 'bold'
  }

  useEffect(()=>{
    // if(isWinner!==null) return
    setWidth(`calc(${props.exp/2.9}%)`)
  }, [])

  return (
    <div className='ProgessBar'>
      <div style={containerStyles}>
        <div style={fillerStyles} className='filterStyle'>
          <span style={labelStyles}>{props.exp}</span>
        </div>
      </div>
    </div>

  );
};

export default ProgressBar;