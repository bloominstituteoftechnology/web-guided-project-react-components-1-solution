/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, { useState } from 'react'

export default function Playground(props) {
  // useState allows to set internal state
  // it is a function that takes that desired initial state
  // returns an array with 2 things: the state itsef and a state changer
  // NO DECLARING VARIABLES TO HOLD STATE (with let)

  // const theArray = useState(0)
  // const count = theArray[0]
  // const setCount = theArray[1]
  const [count, setCount] = useState(0)
  const [spinnerOn, setSpinnerOn] = useState(false)
  const [weapon, setWeapon] = useState('scissors')

  // let count = 0 NOOOOOOOOOOO never keep state inside plain variables

  if (spinnerOn) {
    return (
      <div className='container'>
        <h3>the spinner is {spinnerOn ? 'ON' : 'OFF'}. Please wait...</h3>
        <button onClick={evt => setSpinnerOn(false)}>turn spinner off</button>
      </div>
    )
  }

  return (
    <div className="container" id={'cohort' + props.cohort}>
      <h2>Playground for Web {props.cohort}</h2>
      <h3>the count is {count}</h3>
      <button onClick={evt => { setCount(count + 1) }}>increase</button>

      <h3>the spinner is {spinnerOn ? 'ON' : 'OFF'}</h3>
      <button onClick={evt => setSpinnerOn(!spinnerOn)}>toggle spinner</button>

      <h3>the current weapon is {weapon}</h3>
      <button onClick={evt => setWeapon('scissors')}>pick scissors</button>
      <button onClick={evt => setWeapon('rock')}>pick rock</button>
      <button onClick={evt => setWeapon('paper')}>pick paper</button>

    </div>
  )
}
