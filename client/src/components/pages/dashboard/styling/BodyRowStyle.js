import { Row } from 'simple-flexbox';
import styled, {keyframes} from "styled-components"

const animateShow = keyframes`
from {
    opacity: 0;
    transform: translateY(-100px);
}
to {
    opacity: 1;
    transform: translateX(0);
}
`

export default styled(Row)`
    background: rgb(231,231,231);
    background: linear-gradient(180deg, rgba(231,231,231,1) 0%, rgba(218,217,217,1) 100%);
    -webkit-box-shadow: 4px 4px 29px 1px rgba(231,231,231,0.83);
    -moz-box-shadow: 4px 4px 29px 1px rgba(231,231,231,0.83);
    box-shadow: 4px 4px 29px 1px rgba(231,231,231,0.83);
    animation-delay: .5s;
    animation: ${animateShow} 1s ease;
`