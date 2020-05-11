import React, { useState } from 'react'

function Family(props) {
  const [savings, setSavings] = useState(1000)
  const workForFifty = () => setSavings(savings + 50)

  return (
    <Parent name='Jeff' account={savings} work={workForFifty} />
  )
}

function Parent(props) {
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
