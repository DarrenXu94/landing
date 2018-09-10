import React, { Component } from 'react';
import styled, { keyframes } from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

class TransitionFeature extends Component {
    state = {
        value: true
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ value: !this.state.value })}>Toggle state</button>
                <TransitionGroup>
                    <CSSTransition key={this.state.value} classNames="fadeTranslate" timeout={300}>
                        {
                            this.state.value ?
                                <TransitionComponent>
                                    <div>
                                        <div className={"heart"}/>
                                        <p>Credit pulsating animation: <a href="https://jsfiddle.net/t7f97kf4/">here</a></p>
                                        <p>Shape clip path generator <a href="https://bennettfeely.com/clippy/">here</a></p>
                                    </div>
                                </TransitionComponent> :
                                <TransitionComponent>
                                    <div>Second</div>
                                </TransitionComponent>
                        }
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default TransitionFeature;