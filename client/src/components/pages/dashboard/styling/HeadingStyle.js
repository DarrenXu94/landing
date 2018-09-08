import styled, {keyframes} from "styled-components"

const showText = keyframes`
0% {
    width: 0;
    left: 0;
}
50% {
    width: 100%;
    left: 0
}
100% {
    width: 0;
    left: 100%;
}
`;

const animateText = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`

export default styled.div`
    position: relative;
    display: inline-block;
    overflow: hidden;
    z-index: 5;
    h1 {
        opacity: 0;
        animation: ${animateText} .7s forwards;
    }
    ::before, ::after {
        content: '';
        position: absolute;
        top:0; right:0;
        height: 100%;
        z-index: 1;
        -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    ::before{
        background-color: rgba(198,160,135,1);
        animation: ${showText} .8s ease;
    }
    
    ::after{
        background-color: black;
        animation-delay: .5s;
        animation: ${showText} .6s ease;
    }
`

