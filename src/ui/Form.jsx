import styled from 'styled-components';

export const Form = styled.form`
  height: 8rem;
  width: 100rem;
  display: flex;
  gap: 2rem;
  position: relative;

  @media screen and (max-width: 850px) {
    height: max-content;
    width: 90vw;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: relative;
  }
`;
