import styled from 'styled-components';

const StyledTodos = styled.div`
  min-height: 8rem;
  width: 100%;
  background-color: var(--color-brand-50);
  color: var(--color-brand-400);
  border-radius: 12px;
  padding: 0 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    min-height: 10rem;
    border-radius: 8px;
    padding: 2rem 1.5rem;
    font-size: 2rem;
  }
`;

function Todos({ children }) {
  return <StyledTodos>{children}</StyledTodos>;
}

export default Todos;
