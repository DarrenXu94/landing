import React, { Component } from 'react';
import { getEPLTable } from '../../../../api/Football'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styled, { keyframes } from "styled-components"

const animateShow = keyframes`
from {
    opacity: 0;
    transform: translateX(-100%); 

}
to {
    opacity: 1;
    transform: translateX(0); 

}
`
const animateShowName = keyframes`
from {
    opacity: 0;
    transform: translateX(100%); 

}
to {
    opacity: 1;
    transform: translateX(0); 

}
`

const ImgStyle = styled.img`
    padding-right: 10px;
    animation-delay: .5s;
    animation: ${animateShow} 1s ease;
`

const NameStyle = styled.p`
    animation-delay: 1s;
    animation: ${animateShowName} 1s ease;
`

class FootballFeature extends Component {
    state = {
        data: []
    }
    componentWillMount() {
        getEPLTable()
            .then((data) => {
                console.log(Array.from(data))
                this.setState({ data: Array.from(data) })
            })
    }

    showTeam(cell, row) {
        return (
            <div>
                <ImgStyle
                    src={cell.crestUrl}
                    alt="Crest"
                    style={{ height: '20px' }}
                />
                <NameStyle>
                    {cell.name}
                </NameStyle>

            </div>
        );
    }

    render() {
        return (
            <BootstrapTable data={this.state.data} striped hover>
                <TableHeaderColumn width={'15%'} isKey dataField='position'>Position</TableHeaderColumn>
                <TableHeaderColumn dataField='team' dataFormat={this.showTeam}>Team</TableHeaderColumn>
                <TableHeaderColumn width={'15%'} dataField='points'>Points</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default FootballFeature;