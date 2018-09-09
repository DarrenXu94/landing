import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row } from 'simple-flexbox';
import styled, {keyframes} from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AlignInfoIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        cursor: pointer;
    }
`
const JustifyBetween = styled(Row)`
    justify-content: space-between;
`
const animateShow = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`
const TransitionComponent = styled.div`
    position: fixed;

    animation-delay: .5s;
    animation: ${animateShow} 1s ease;
`

class FormatFeature extends Component {
    state = {
        info: false
    }
    toggleInfo = () => {
        this.setState({info: !this.state.info})
    }
    render() {
        return (
            <Fragment>
                <JustifyBetween>
                    <h3> {this.props.heading} </h3>
                    <AlignInfoIcon>
                        <FontAwesomeIcon icon="info-circle" onClick={this.toggleInfo} />
                    </AlignInfoIcon>
                </JustifyBetween>
                <TransitionGroup>
                  <CSSTransition key={this.state.info} classNames="fadeTranslate" timeout={300}>
                    {this.state.info ? <TransitionComponent>{this.props.info}</TransitionComponent> : <TransitionComponent>{this.props.children}</TransitionComponent>}
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default FormatFeature;