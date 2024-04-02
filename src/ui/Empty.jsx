import styled from 'styled-components';

const StyledEmpty = styled.div`
  width: 100rem;
  height: 20rem;
  background-color: var(--color-brand-50);
  color: var(--color-brand-500);
  font-size: 2.5rem;
  border: 1px dashed var(--color-brand-500);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 850px) {
    width: 90vw;
    font-size: 3rem;
    border-radius: 10px;
  }

  @media screen and (max-width: 767px) {
    height: 17rem;
    font-size: 2.25rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 360px) {
    height: 15rem;
    font-size: 2rem;
  }
`;

function Empty() {
  return <StyledEmpty>Start adding your todo list</StyledEmpty>;
}

export default Empty;
