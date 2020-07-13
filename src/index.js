// 👉 Importing React libs from node_modules folder (see package.json)
import React from 'react'          // to make React components
import { render } from 'react-dom' // to append a React tree of components to the DOM

// 👉 Importing a React component from another file
import RockPaperScissors from './components/RockPaperScissors'
import FamilyTree from './components/FamilyTree'


/*
💥💥💥 TASK 1A- Mounting a React element to the DOM (often only once per app) 💥💥💥
  👉 execute the 'render' named export from react-dom
  👉 1st ARG - React element (or React component "invoked")
  👉 2nd ARG - DOM element to append to
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
💥💥💥 TASK 1B- Example of a React component `Greet` being DECLARED 💥💥💥

  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly braces
  - We interpolate attribute values and content
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
💥💥💥 TASK 1C- Examples of a `Greet` component being INVOKED 💥💥💥

  - Components are "invoked" so they return elements
  - Instead of invoking with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly

  <Greet person='Ian' emphasis />              // props is object with { person: 'Ian', emphasis: true }
  <Greet person='Michael' emphasis={false} />  // props is object with { person: 'Michael', emphasis: false }
  <Greet person='Sarah' />                     // props is object with { person: 'Sarah' }
*/

// EXERCISE: render the Greet to div#greet passing the correct props
render(
  <Greet personToGreet='Petar' />,
  document.querySelector('#greet')
)


// 💥💥💥 TASK 2: render the FamilyTree to div#familyTree
// FamilyTree expects no props
// Work on the FamilyTree component


// 💥💥💥 TASK 3: render the RockPaperScissors to div#rockPaperScissors
// RockPaperScissors expects a 'player' prop
// Work on the RockPaperScissors component
