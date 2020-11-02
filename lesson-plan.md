# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* Have students install the React Developer Tools Chrome extension.

## 2- Instructor's Checklist of Things to Cover

* Difference between React components and React elements.
* Declaring a component using a function. Argument and return value.
* Anchoring React elements to the DOM with `ReactDOM.render`.
* The rules of JSX and differences with HTML.
* A little bit of props.
* What qualifies as application state (data that drive the app which change over time).
* The rules of component state in React.
* Using component state at the top-level component to keep track of application state.
* How to use the state hook.
* Using interpolated expressions inside the JSX for text contents and attributes.
* Using logical expressions and ternaries to render chunks of JSX conditionally.
* The futility of using plain variables to keep track of state.

## 3- Demo Part I (index.js)

* Demo `index.js` covering everything outlined in the comments.
* Explain props at a high level.
* Demo all the different places we can interpolate expressions in the JSX.
* Explain the differences between HTML elements and React elements (class vs classname...).
* Render elements conditionally using logical expressions and ternaries.
* At the end of this part, import `Playground.js` and use render it in the JSX.

## 4- Demo Part II (Playground.js)

* Demo `Playground.js` covering everything outlined in the comments.
* Create several slices of component state explaining the state hook.
* Interpolate the states inside the JSX.
* Create buttons and click handlers to update state.
* The synthetic event object.
* Students must never keep track of state in plain variables.

## 5- Links of Interest

* [React Docs](https://reactjs.org/docs/getting-started.html)
* [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
* [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)

## 6- Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```
