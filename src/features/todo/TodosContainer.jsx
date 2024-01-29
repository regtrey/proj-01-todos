import styled from 'styled-components';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useTodos } from '../../context/TodosContext';

import { Button } from '../../ui/Button';
import Todos from './Todos';

const StyledTodosContainer = styled.div`
  min-height: max-content;
  max-height: 33.5rem;
  width: 100rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  overflow: scroll;

  @media (max-width: 768px) {
    max-height: 33rem;
    width: 90vw;
    border-radius: 8px;
    gap: 1.5rem;
  }
`;

function TodosContainer() {
  const { todos, setTodos } = useTodos();

  function handleDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <StyledTodosContainer>
      {todos.map((todo) => (
        <Todos key={todo.id}>
          <span>{todo.message}</span>{' '}
          <Button
            size="small"
            type="danger"
            onClick={() => handleDelete(todo.id)}
          >
            <HiOutlineXMark />
          </Button>
        </Todos>
      ))}
    </StyledTodosContainer>
  );
}

export default TodosContainer;
