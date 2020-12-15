import React from 'react';
import ReactDOM  from 'react-dom';


// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   console.log('Hello from component')
//   return (
//   <div>
//     <p>Hello World, it is {now.toString()}</p>
//     <p>
//       {a} plus {b} is {a+b}
//     </p>
//   </div>
//   )
// }

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name= 'Pennywise'
  const age = 10210234
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Dan" age={32+3} />
      <Hello name="Beetlejuice" age={21} />
      <Hello name={name} age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
