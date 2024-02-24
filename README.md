# Project Name
- Course Registration
# Used Tools
- React,React Hooks,Tailwind CSS,Daisy UI


# Features
- React Hooks like useState,useEffetcs.
- Show JSON data on UI
- Dynamic States Changing
- Responsive Layout
- Alerts with conditions

# FAQ
- I used many more states in the project.Two of them are useState and useEffetcs.

# How i managed the states in this project

# useState
- In React, the state is data or properties you can use in our application. States are mutable, meaning their value can change, and for that, the useState() hook is used to handle and manage your states.
The useState() hook allows you to create, track and update a state in functional components. This hook is created by React and doesn't need to be installed when you create your React project.By importing this state,you would be able to use the state.Make sure to import the useState hook from the 'react' library at the beginning of your component file. Declare State Variables:
You can access and update the state variable within your component. Functional Updates:
You can also use a function with setCount for more complex state updates that depend on the previous state value Use State Variables as Needed: You can use useState to manage multiple state variables in your component. Effect of State Changes:
Inside your functional component, declare state variables using the useState hook. Access and Update State:
Be aware that when state changes, React will re-render the component. This is essential for keeping your UI in sync with your data. That's a general overview of how to manage state using the useState hook in a React project. Remember to use state variables for managing component-specific data and updates.


# useEffect
- React’s effects are a completely different animal than the lifecycle methods of class-based components. The abstraction level differs, too. To their credit, lifecycle methods do give components a predictable structure. The code is more explicit in contrast to effects, so developers can directly spot the relevant parts (e.g., componentDidMount) in terms of performing tasks at particular lifecycle phases (e.g., on component unmount).

Import the useEffect hook from the 'react' library at the beginning of your component file: Defining an Effect:

The useEffect hook takes two arguments:

a function that represents the effect and an optional array of dependencies. The function is where you place the code that will run as a side effect. The second argument (dependencies array) is used to specify when the effect should run. If it's an empty array, the effect will run once after the initial render. If you provide a list of dependencies, the effect will run whenever one of those dependencies changes

Running the Effect:

Inside the effect function, you can perform various actions like data fetching, setting up event listeners, or updating the component state. For instance, making an API request with fetch.

Cleaning Up the Effect:

You can return a cleanup function from the effect, which will be called when the component unmounts or when the dependencies change. This is useful for removing event listeners or cleaning up resources to avoid memory leaks.

Dependencies Array:

If you have dependencies, pass them in the second argument of useEffect. The effect will re-run whenever any of the listed dependencies change. This helps in scenarios where you need to react to specific changes.Be cautious when including dependencies. Adding too many can lead to excessive re-renders, while omitting necessary dependencies can lead to bugs.
