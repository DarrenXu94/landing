import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components"

const boxmove = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
`;

const boxmoveFinish = keyframes`
  from {
    transform: scale(1.5);
  }

  to {
    transform: scale(1);
  }
`;

export default styled(Link)`
  text-decoration: none;
  animation: ${boxmoveFinish} 0.6s forwards;

  &:hover {
    animation: ${boxmove} 0.6s forwards;

  }
`
