# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* Have students install the React Developer Tools Chrome extension.

## 2- Instructor's Checklist of Things to Cover

* Declaring a component.
* Anchoring a component to the DOM with React.Render.
* The rules of JSX.
* A little bit of props.
* The rules of application state.
* How to use the state hook to keep track of app state.
* How to use logical expressions and ternaries to render JSX conditionally.
* Using interpolated expressions inside the JSX.

## 3- Demo Part I (index.js)

* Demo `index.js` covering everything outlined in the comments.
* Explain props at a high level.
* Show the different places we can interpolate expressions in the JSX.
* Explain the differences between HTML elements and React elements (class vs classname...).
* Render elements conditionally using logical expressions and ternaries.
* At the end of this part, import `Playground.js` and use render it in the JSX.

## 4- Demo Part II (Playground.js)

* Demo `Playground.js` covering everything outlined in the comments.
* Create several slices of component state explaining the state hook.
* Interpolate the states inside the JSX.
* Create buttons and click handlers to update state.
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
