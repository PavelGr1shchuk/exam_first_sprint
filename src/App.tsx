import { useState } from 'react'
import { Button } from './Button'
import './App.css'
import { Display } from './Display'
import { Settings } from './Settings';

const App = () => {
  const [start, setStart] = useState(Number(localStorage.getItem('start')) || 0)
  const [end, setEnd] = useState(Number(localStorage.getItem('end')) || 5)
  const [count, setCount] = useState(start)
  const [isSetModeOn, setIsSetModeOn] = useState(false)
  const buttons = [
    { label: 'inc', isDisabled: count === end, newCount: count + 1 },
    { label: 'reset', isDisabled: count === start, newCount: start },
    { label: 'set', isDisabled: end <= start }
  ]

  const onButtonClick = (label: string, newCount?: number) => {
    label === 'set' ? setIsSetModeOn(!isSetModeOn) : setCount(newCount ?? 0)
  }

  return (
    <div className='counter'>
      {isSetModeOn ? <Settings min={start} max={end} setMin={setStart} setMax={setEnd} /> : <Display count={count} end={end} />}
      <div className='buttons'>
        {buttons.map(button => {
          return <Button key={button.label} label={button.label} isDisabled={button.isDisabled} onClick={() => onButtonClick(button.label, button.newCount)} />
        })}
      </div>
    </div>
  )
}

export default App
