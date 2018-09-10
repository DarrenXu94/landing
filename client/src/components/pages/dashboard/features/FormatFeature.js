import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row } from 'simple-flexbox';
import styled from "styled-components"

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

const DivNoScroll = styled.div`
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }
    /* optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
        background: #FF0000;
    }
`

class FormatFeature extends Component {
    state = {
        info: false
    }
    toggleInfo = () => {
        this.setState({ info: !this.state.info })
    }
 
    render() {
        return (
            <DivNoScroll>
                <JustifyBetween>
                    <h3> {this.props.heading} </h3>
                    <AlignInfoIcon>
                        <FontAwesomeIcon icon="info-circle" onClick={this.toggleInfo} />
                    </AlignInfoIcon>
                </JustifyBetween>
                
                <div className={"scene"}>
                    <div className={(this.state.info) ? "card is-flipped" : "card"}>
                        <div className={"card__face card__face--front"}>{this.props.children}</div>
                        <div className={"card__face card__face--back"}>{this.props.info}</div>
                    </div>
                </div>
            </DivNoScroll>
        );
    }
}

export default FormatFeature;