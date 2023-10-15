import React, { useState } from 'react'
import './DiceComponent.css'

const DiceComponenet = (props) => {
  let randomNumber = props.randomNumber
  let imgSrc = '/assets/images/dice'+randomNumber+'.png'
  return (
    <div className='container' >
        <p>{props.text}</p>
        <img src={imgSrc} />
    </div>
  )
}

export default DiceComponenet