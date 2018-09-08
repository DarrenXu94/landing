import React, { Component } from 'react';
import { Row } from 'simple-flexbox';
import Panel from './Panel'
import LandingLinkStyle from './styling/LandingLinkStyle'
import Clock from './Clock'
import Weather from './landing/Weather'

import Fill from './styling/Fill'
import HeaderStyle from './styling/HeaderStyle'
import ColumnPanelStyle from './styling/ColumnPanelStyle'
import HeaderRowStyle from './styling/HeaderRowStyle'
import LandingHeaderStyle from './styling/LandingHeaderStyle'

import { DASHBOARD_URL, STATPAGE_URL, CONTEXTTESTING_URL } from '../config/Pages'

const panelOptions = [
    { linkTo: STATPAGE_URL, location: "Stat Page" },
    { linkTo: DASHBOARD_URL, location: "Dashboard" },
    { linkTo: CONTEXTTESTING_URL, location: "Context Testing" }
]

class Landing extends Component {
    renderPanel = () => {
        return panelOptions.map((obj, idx) => {
            return (
                <ColumnPanelStyle key={idx}>
                    <LandingLinkStyle to={obj.linkTo}>
                        <Panel location={obj.location} />
                    </LandingLinkStyle>
                </ColumnPanelStyle>
            )
        })
    }
    render() {
        return (
            <Fill>
                <HeaderStyle horizontal='center'>
                    <LandingHeaderStyle>
                        <HeaderRowStyle >
                            <span>
                                <h1><Clock /></h1>
                            </span>
                        </HeaderRowStyle>
                        <Row style={{ textAlign: 'center' }}>
                            <span>
                                <Weather />
                            </span>
                        </Row>
                    </LandingHeaderStyle>
                </HeaderStyle>

                <Row flexGrow={1} vertical='center' horizontal='center' style={{ backgroundColor: 'grey', minWidth: '400px' }}>
                    {this.renderPanel()}
                </Row>
            </Fill>
        );
    }
}

export default Landing;