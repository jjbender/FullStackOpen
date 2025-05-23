import { useState } from 'react'

const App = () => {

  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  const decreaseByOne = () => setCounter(counter - 1)

  const handleClick = () => {
    console.log('clicked')
  }



  console.log('rendering...', counter)

  return (
    <div>
      <Display counter={counter}/>
      <div>{counter}</div>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />      
    </div>
  )
}

export default App