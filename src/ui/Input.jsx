import styled, { css } from 'styled-components';

const variant = {
  maxed: css`
    border: 1.5px solid red;

    &:focus {
      outline: none;
    }
  `,
};

export const Input = styled.input`
  height: 100%;
  width: 75rem;
  color: var(--color-grey-600);
  border: 1.5px solid var(--color-grey-600);
  border-radius: 12px;
  font-size: 2.5rem;
  padding: 0 3.5rem;

  ${(props) => props.isMaxed && variant.maxed}

  &::placeholder {
    color: var(--color-grey-600);
  }

  @media screen and (max-width: 850px) {
    width: 90vw;
    padding: 0 2.5rem;
  }

  @media screen and (max-width: 767px) {
    height: 5rem;
    width: 100%;
    border-radius: 8px;
    font-size: 2rem;
    padding: 0 1.5rem;
  }
`;
