import { useState } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

import Todos from './Todos';
import Todo from './Todo';
import { Button } from '../../ui/Button';
import { Form } from '../../ui/Form';
import { Input } from '../../ui/Input';
import { CharLimit } from '../../ui/CharLimit';

const maxChars = 55;
const initialTodos = [
  { id: 1, message: 'The greatest glory in living lies not in never falling.' },
  { id: 2, message: 'The only thing we have to fear is fear itself.' },
  { id: 3, message: 'Do one thing every day that scares you.' },
];

function TodosContainer() {
  const [todos, setTodos] = useState(initialTodos);
  const [todoInput, setTodoInput] = useState('');

  const numChars = todoInput.length;
  const isMaxed = numChars > maxChars;

  function handleSubmit(e) {
    e.preventDefault();

    if (!todoInput) return;
    const lastIndex = todos.length === 0 ? 0 : todos[todos.length - 1].id;
    const id = lastIndex + 1;

    setTodos((todos) => [...todos, { id, message: todoInput }]);
    setTodoInput('');
  }

  function handleDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <Todos
        todos={todos}
        render={(todo) => (
          <Todo key={todo.id}>
            <span>{todo.message}</span>{' '}
            <Button
              size="small"
              type="danger"
              onClick={() => handleDelete(todo.id)}
            >
              <HiOutlineXMark />
            </Button>
          </Todo>
        )}
      />

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Add something todo..."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          isMaxed={isMaxed}
        />
        <CharLimit isMaxed={isMaxed}>
          {numChars} / {maxChars}
        </CharLimit>
        <Button size="large" type="primary" disabled={isMaxed}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default TodosContainer;
