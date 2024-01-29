import styled from 'styled-components';

export const Form = styled.form`
  height: 8rem;
  width: 100rem;
  display: flex;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    /* background-color: green; */
    height: max-content;
    width: 90vw;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    position: relative;
    margin-top: 1.5rem;
  }
`;
