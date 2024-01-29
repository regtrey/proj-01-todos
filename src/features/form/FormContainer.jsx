import styled from 'styled-components';
import { useTodos } from '../../context/TodosContext';

import { Button } from '../../ui/Button';
import { Form } from '../../ui/Form';
import { Input } from '../../ui/Input';

const Span = styled.span`
  font-size: 1.5rem;
  color: var(--color-brand-500);
  position: absolute;
  top: 90px;
  left: 35px;

  @media (max-width: 768px) {
    font-size: 1.35rem;
    position: absolute;
    top: 55px;
    left: 15px;
  }
`;

function FormContainer() {
  const { todos, setTodos, todoInput, setTodoInput } = useTodos();

  const maxChars = 55;
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

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Add something todo..."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Span>
          {numChars} / {maxChars}
        </Span>
        <Button size="large" type="primary" disabled={isMaxed}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormContainer;
