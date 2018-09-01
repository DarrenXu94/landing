import React, { Component } from 'react';
import { Row } from 'simple-flexbox';
import styled from "styled-components"
import ChromeRecent from './ChromeRecent'

const Item = styled.div`
    background-color: white;
    margin: 10px;
    padding: 10px;
    overflow: auto;
    max-width: 60%;
`

const RowSpacing = styled(Row)`
    justify-content: space-around;
`

class PanelRow extends Component {
    render() {
        return (
            <RowSpacing>
                <Item flexGrow={1}>
                    <ChromeRecent />
                </Item>
                <Item flexGrow={1}>
                    <h3> Column 1 </h3>
                    <span> column 1 content </span>
                </Item>
                <Item flexGrow={1}>
                    <h3> Column 1 </h3>
                    <span> column 1 content </span>
                </Item>
            </RowSpacing>
        );
    }
}

export default PanelRow;