import React, { useEffect, useState } from 'react'
import './App.css'
import DiceComponenet from './components/DiceComponenet'

const App = () => {
  const [randomNumber1 , setRandomNumber1] = useState(6)
  const [randomNumber2 , setRandomNumber2] = useState(6)
  // Math.floor(Math.random() * 6) + 1
  const [headerText , setHeaderText] = useState('')
  const [initialFlag , setInitialFlag] = useState(false)

  
  function rollDice(){
    setRandomNumber1(Math.floor(Math.random() * 6) + 1)
    setRandomNumber2(Math.floor(Math.random() * 6) + 1)
  }
  useEffect(()=>{
    if(randomNumber1 > randomNumber2){
      setHeaderText('🚩 Player 1 wins.')
    }else if (randomNumber1 < randomNumber2){
      setHeaderText('Player 2 wins. 🚩')
    }else {
      setHeaderText('Draw')
    }

    if(!initialFlag)
    setHeaderText('Roll to start')
    setInitialFlag(true)



  },[randomNumber1 , randomNumber2])
  

  return (
    <div className='container' >
      <h1>Dice Game 🎲</h1>
      <h2>{headerText}</h2>
      <div className='diceContainer' >
        <DiceComponenet text='Player 1' randomNumber={randomNumber1} />
        <DiceComponenet text='Player 2' randomNumber={randomNumber2} />
      </div>
      <button onClick={rollDice} >Roll dice 🎲</button>
    </div>
  )
}

export default App