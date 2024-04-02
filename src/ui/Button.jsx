import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    height: 2.5rem;
    width: 2.5rem;
  `,
  large: css`
    height: 100%;
    width: 23rem;
    font-size: 2.5rem;
  `,
};

const types = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-500);
    border-radius: 12px;
    transition: all 0.5s;

    &:hover {
      background-color: var(--color-brand-400);
      color: var(--color-brand-600);
    }

    @media screen and (max-width: 850px) {
      width: 100%;
    }
  `,
  danger: css`
    color: var(--color-brand-300);
    background-color: var(--color-brand-0);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    &:hover {
      color: var(--color-brand-400);
      background-color: var(--color-brand-100);
    }
  `,
};

export const Button = styled.button`
  border: none;
  &:disabled {
    color: var(--color-grey-0);
    background-color: var(--color-grey-300);
    cursor: not-allowed;
    &:hover {
      color: var(--color-grey-0);
      background-color: var(--color-grey-300);
    }
  }

  &:has(svg) {
    height: 3rem;
  }

  @media screen and (max-width: 850px) {
    height: 12rem;
  }

  @media screen and (max-width: 799px) {
    height: 10rem;
  }

  @media screen and (max-width: 767px) {
    height: 5rem;
    border-radius: 8px;
    font-size: 2rem;
  }

  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}
`;
