// 👉 Importing React libs from node_modules folder (see package.json)
import React from 'react'          // to make React components
import { render } from 'react-dom' // to append a React tree of components to the DOM

// 👉 Importing a React component from another file
import RockPaperScissors from './components/RockPaperScissors'
import FamilyTree from './components/FamilyTree'


/*
💥💥💥 A- Mounting a React element to the DOM (often only once per app) 💥💥💥
💥💥💥 A- Mounting a React element to the DOM (often only once per app) 💥💥💥
💥💥💥 A- Mounting a React element to the DOM (often only once per app) 💥💥💥
*/

// EXERCISE: render the RockPaperScissors to div#rockPaperScissors
render(
  // 👉 1st ARG - React element (or React component "invoked"):
  <RockPaperScissors player='Ian' />,
  // 👉 2nd ARG - DOM element to append to:
  document.querySelector('#rockPaperScissors')
)

// EXERCISE: render the FamilyTree to div#familyTree
render(
  <FamilyTree />,
  document.querySelector('#familyTree')
)


/*
💥💥💥 B- Example of a React component `Greet` being DECLARED 💥💥💥
💥💥💥 B- Example of a React component `Greet` being DECLARED 💥💥💥
💥💥💥 B- Example of a React component `Greet` being DECLARED 💥💥💥

  - Name is capitalized
  - Takes an object ("props") as its only argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components (h1, div, etc)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 expressions 🔥 using curly braces
  - We can interpolate attribute values, and content
  - We can validate the props
*/
function Greet(props) { // takes data => returns element
  const { personToGreet, emphasis } = props

  return (
    <div className='container'>
      Hello, {personToGreet}. I am {emphasis && 'SO '}happy to see you.
    </div>
  )
}


/*
💥💥💥 C- Examples of `Greet` component being INVOKED 💥💥💥
💥💥💥 C- Examples of `Greet` component being INVOKED 💥💥💥
💥💥💥 C- Examples of `Greet` component being INVOKED 💥💥💥

  - Components are "invoked" so they return elements
  - Instead of invoking with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly

  <Greet personToGreet='Ian' emphasis />              // props are { personToGreet: 'Ian', emphasis: true }
  <Greet personToGreet='Michael' emphasis={false} />  // props are { personToGreet: 'Michael', emphasis: false }
  <Greet personToGreet='Sarah' />                     // props are { personToGreet: 'Sarah' }
*/

// EXERCISE: render the Greet to div#greet passing the correct props
render(
  <Greet personToGreet='Petar' />,
  document.querySelector('#greet')
)
