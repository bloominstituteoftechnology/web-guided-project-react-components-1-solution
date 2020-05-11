// 👉 Importing React libs from node_modules folder (see package.json)
import React from 'react'          // to make React components
import { render } from 'react-dom' // to append a React tree of components to the DOM

// 👉 Importing a React component from another file
import RockPaperScissors from './components/RockPaperScissors'
import FamilyTree from './components/FamilyTree'

// 👉 Importing a React component from node_modules
import Bulb from '@ladrillo/lightbulb'


/*
💥💥💥 A- Mounting a React element to the DOM (only once per app) 💥💥💥
💥💥💥 A- Mounting a React element to the DOM (only once per app) 💥💥💥
💥💥💥 A- Mounting a React element to the DOM (only once per app) 💥💥💥
*/
const id = 'helloWorld'
const className = 'hello-world'
const content = 'Hello, World!!!!!!!'
const altContent = true ? 'HELLO, WORLD' : 'you will not see me'
const size = 250
// render(
//   // 👉 1st ARG - React element (or React component "invoked"):
//   // <div className={className} id={id}>{altContent + 5}</div>,
//   // <div>
//   //   <Bulb on={true} color='red' size='150' />
//   //   <Bulb on={false} color='blue' size={size} />
//   //   <Bulb on={true} color='pink' size={200} />
//   // </div>,
//   // <Greet name='Ian' emphasis hate />,
//   <RockPaperScissors player='Ian' />,
//   // 👉 2nd ARG - DOM element to append to:
//   document.querySelector('#rockPaperScissors')
// )

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
  const { name, emphasis, hate } = props
  // if (hate) {
  //   return 'I HATE YOU ' + name
  // }
  return (
    <div>Hello, {name}. I am {emphasis && 'SO'} {hate ? 'angry' : 'happy'} to see you.</div>
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

  <Greet name='Ian' emphasis />              // props are { name: 'Ian', emphasis: true }
  <Greet name='Michael' emphasis={false} />  // props are { name: 'Michael', emphasis: false }
  <Greet name='Sarah' />                     // props are { name: 'Sarah' }
*/
