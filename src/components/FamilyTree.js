// 🥺 OLD, NOT USED IN GP ANYMORE
// 🥺 OLD, NOT USED IN GP ANYMORE
// 🥺 OLD, NOT USED IN GP ANYMORE
// 🥺 OLD, NOT USED IN GP ANYMORE
// 🥺 OLD, NOT USED IN GP ANYMORE

// In order to work with state,
// we need React and the state hook from React
import React, { useState } from 'react'


function Family(props) {
  // Family is the top-level component so it does not receive props
  // Family needs some state to hold savings, as they'll change over time
  // Family needs to render a Parent
  const [savings, setSavings] = useState(1000)
  const workForFifty = () => setSavings(savings + 50)

  return (
    <Parent name='Jeff' account={savings} work={workForFifty} />
  )
}

function Parent(props) {
  // Parent expects some information passed through props
  // We can optionally guard against props not being what they're supposed to
  // This Parent should render its properties (name, etc)
  // This Parent can render one or more Child components
  const { name, account, work } = props

  if (!name || !account) {
    return <div className='container bad'>This Parent needs its props!</div>
  }

  return (
    <div className='container'>
      <h3>Parent {name}</h3>
      <div>Money: {account}</div>
      <div><button onClick={work}>work</button></div>

      <Child name='Barbara' allowance={account / 2} />
      <Child name='Jeff' allowance={0} />
    </div>
  )
}


function Child(props) {
  // A Child expects some props (name, etc)
  const { name, allowance } = props

  if (!name || allowance === undefined) {
    return <div className='container bad'>This Child needs its props!</div>
  }

  return (
    <div className='container'>
      <h3>Child {name}</h3>
      <div>Allowance: {allowance}</div>
    </div>
  )
}


export default Family
