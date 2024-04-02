import styled from 'styled-components';

const StyledTodo = styled.div`
  min-height: 8rem;
  width: 100%;
  background-color: var(--color-brand-50);
  color: var(--color-brand-500);
  border-radius: 12px;
  padding: 0 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.5rem;

  @media screen and (max-width: 850px) {
    border-radius: 10px;
    padding: 1.5rem 2.5rem;
    font-size: 3rem;
    overflow-x: hidden;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  @media screen and (max-width: 767px) {
    min-height: 7.5rem;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    font-size: 2rem;
  }
`;

function Todo({ children }) {
  return <StyledTodo>{children}</StyledTodo>;
}

export default Todo;
