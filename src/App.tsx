import { useState } from 'react'
import { Button } from './Button'
import './App.css'
import { Display } from './Display'

const START = 0;
export const END = 5;

const App = () => {
  const [count, setCount] = useState(START)
  const buttons = [
    { label: 'inc', isDisabled: count === END, newCount: count + 1 },
    { label: 'reset', isDisabled: count === START, newCount: START }
  ]

  return (
    <div className='counter'>
      <Display count={count} />
      <div className='buttons'>
        {buttons.map(button => {
          return <Button key={button.label} label={button.label} isDisabled={button.isDisabled} onClick={() => setCount(button.newCount)} />
        })}
      </div>
    </div>
  )
}

export default App
