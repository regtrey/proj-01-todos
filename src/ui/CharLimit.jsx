import styled from 'styled-components';

export const CharLimit = styled.span`
  font-size: 1.5rem;
  position: absolute;
  top: 90px;
  left: 35px;

  color: ${(props) =>
    props.isMaxed ? 'var(--color-brand-500)' : 'var(--color-grey-600)'};

  @media (max-width: 768px) {
    font-size: 1.35rem;
    position: absolute;
    top: 55px;
    left: 15px;
  }
`;
