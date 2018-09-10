import React, { Component } from 'react';
import { getEPLTable } from '../../../../api/Football'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class FootballFeature extends Component {
    state = {
        data : []
    }
    componentWillMount() {
        getEPLTable()
            .then((data) => {
                console.log(Array.from(data))
                this.setState({data: Array.from(data)})
            })
    }

    showTeam(cell, row) {
        return cell.name;
    }

    render() {
        return (
                <BootstrapTable data={this.state.data} striped hover>
                    <TableHeaderColumn isKey dataField='position'>Position</TableHeaderColumn>
                    <TableHeaderColumn dataField='team' dataFormat={this.showTeam}>Team</TableHeaderColumn>
                    <TableHeaderColumn dataField='points'>Points</TableHeaderColumn>
                </BootstrapTable>            
        );
    }
}

export default FootballFeature;