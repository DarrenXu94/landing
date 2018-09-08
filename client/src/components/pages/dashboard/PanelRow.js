import React, { Component } from 'react';
import { Row } from 'simple-flexbox';
import styled from "styled-components"

const Item = styled.div`
    background-color: white;
    margin: 10px;
    padding: 10px;
    overflow: auto;
    max-width: 60%;
    max-height: 400px;
    min-width:300px;
    width: auto;
    max-width: 700px;
`

const RowSpacing = styled(Row)`
    justify-content: space-around;
`

class PanelRow extends Component {

    RenderChildren = () => {
        const multipleChildren = this.props.multipleChildren
        var toReturn = multipleChildren.map((comp, idx)=>{
            return (
                <Item key={idx} flexGrow={1}>
                    {comp}
                </Item>
                )
        })
        return toReturn
    }

    render() {
        return (
            <RowSpacing>
                {this.RenderChildren()}
            </RowSpacing>
        );
    }
}

export default PanelRow;