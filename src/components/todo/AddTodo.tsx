import useAddTodoList from 'hooks/useAddTodoList'

export default function AddTodo() {
  const handleSubmit = useAddTodoList()

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="new-todo-input" name="todo" />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  )
}
