// We need the state hook
import React, { useState } from 'react'
import Bulb from '@ladrillo/lightbulb'

// These constants could live in another module
const weapons = ['🗿', '📜', '✂️']

// It's less error-prone to work with variables than hard-coded strings
const [rock, paper, scissors] = weapons


export default function RockPaperScissors({ player }) {
  // 1- 👉👉👉 CREATE SLICES OF APPLICATION STATE (USING TOP-LEVEL COMPONENT STATE)

  // We need several slices of state, to keep track of:
  //   - the number of rounds played
  const [rounds, setRounds] = useState(1)

  // const stuff = useState(1) // stuff is array of 2 things: slice, and the slice "adjustor"
  // const rounds = stuff[0]
  // const setRounds = stuff [1]

  //   - the number of rounds won
  const [wins, setWins] = useState(0)
  //   - the number of rounds lost
  const [loses, setLoses] = useState(0)
  //   - the MESSAGE displayed on the screen
  const [message, setMessage] = useState('Fight!')

  // 2- 👉👉👉 We DO NOT need a slice for rounds tied, as we can calculate that info using other slices
  // 3- 👉👉👉 REPLACE DOWN IN THE JSX THE HARD CODED PIECES OF DATA WITH PIECES OF STATE
  // 4- 👉👉👉 ATTACH IN THE JSX A CLICK HANDLER THAT UPDATES STATE ON USER INTERACTION


  const play = event => {
    // 5- 👉👉👉 IMPLEMENT THE 'play' HANDLER!

    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔
    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔
    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔

    // 5A- Update the round count
    // rounds++

    setRounds(rounds + 1) // <- a FRESH NEW STATE

    // 5B- Pull out which weapon the user selected from the event.target
    // this is the player weapon
    const player = event.target.name
    console.log(`YOU CLICKED ${player}`)

    // 5C- Generate a random number (0, 1, 2) to select a weapon for the computer
    // this is the computer weapon
    const computer = weapons[Math.floor(Math.random() * 3)]

    if (
      /* 5D- it's a LOSS */
      (player === rock && computer === paper) ||
      (player === paper && computer === scissors) ||
      (player === scissors && computer === rock)
    ) {
      // - Update the losses
      setLoses(loses + 1)
      // - Update the message
      setMessage(`You: ${player}, They: ${computer}. You Lose!`)
    } else if (
      /* 5E- it's a WIN */
      (player === rock && computer === scissors) ||
      (player === paper && computer === rock) ||
      (player === scissors && computer === paper)
    ) {
      // - Update the wins
      setWins(wins + 1)
      // - Update the message
      setMessage(`You: ${player}, They: ${computer}. You Win!`)
    } /* 5F- it's a TIE */ else {
      // - Update the message
      setMessage(`You: ${player}, They: ${computer}. its a tie`)
    }
  }

  return (
    <div className='rock-paper-scissors'>
      <div className='player'>Welcome, {player}</div>
      <h2>Round: {rounds}</h2>

      <Bulb on color={loses > wins ? 'red' : 'blue'} size={100} />

      <h3>won: {wins} | lost: {loses} | tied: {rounds - 1 - (wins + loses)}</h3>
      <h1 className='message'>{message}</h1>

      <div className='buttons'>
        <h3>Choose wisely:</h3>
        <div>
          <button onClick={play} name={rock}>{rock}</button>
          <button onClick={play} name={paper}>{paper}</button>
          <button onClick={play} name={scissors}>{scissors}</button>
        </div>
      </div>
    </div>
  )
}

// STRETCH- 👉👉👉 ADD A RESTART BUTTON, ANYTHING YOU CAN IMAGINE, BRING OTHER COMPONENTS...
