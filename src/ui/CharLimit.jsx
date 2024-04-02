import styled from 'styled-components';

export const CharLimit = styled.span`
  font-size: 1.5rem;
  position: absolute;
  top: 90px;
  left: 35px;

  color: ${(props) => (props.isMaxed ? 'red' : 'var(--color-grey-600)')};

  @media screen and (max-width: 850px) {
    font-size: 1.5rem;
    top: 100px;
    left: 25px;
  }

  @media screen and (max-width: 799px) {
    top: 90px;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.35rem;
    top: 55px;
    left: 15px;
  }
`;
