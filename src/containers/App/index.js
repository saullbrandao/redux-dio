import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { List } from '../../components/List'
import { addTodo } from '../../store/actions'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addTodo(inputValue))
  }

  const handleInput = e => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <List />
      <Input handleInput={handleInput} value={inputValue} />
      <Button handleClick={handleClick}>Add</Button>
    </div>
  )
}

export default App
