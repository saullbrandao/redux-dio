import { useSelector } from 'react-redux'

export const List = () => {
  const todoList = useSelector(state => state.todos)

  return (
    <ul>
      {todoList?.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  )
}
