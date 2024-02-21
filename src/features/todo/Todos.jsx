import styled from 'styled-components';

const StyledTodosContainer = styled.div`
  min-height: max-content;
  /* max-height: 33.5rem; */
  max-height: 38rem;
  width: 100rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  overflow-y: scroll;

  @media (max-width: 768px) {
    max-height: 33rem;
    width: 90vw;
    border-radius: 8px;
    gap: 1.5rem;
  }
`;

function Todos({ todos, render }) {
  return <StyledTodosContainer>{todos.map(render)}</StyledTodosContainer>;
}

export default Todos;
