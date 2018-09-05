import React, { Component } from 'react';
import { Row } from 'simple-flexbox';
import Panel from './Panel'
import LandingHeaderStyle from './LandingHeaderStyle'
import LandingLinkStyle from './LandingLinkStyle'
import Clock from './Clock'
import Weather from './landing/Weather'

import Fill from './styling/Fill'
import HeaderStyle from './styling/HeaderStyle'
import ColumnPanelStyle from './styling/ColumnPanelStyle'
import HeaderRowStyle from './styling/HeaderRowStyle'

class Landing extends Component {
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
                        <Row style={{ textAlign: 'center'}}>
                            <span>
                                <Weather />
                            </span>
                        </Row>
                    </LandingHeaderStyle>
                </HeaderStyle>

                <Row flexGrow={1} vertical='center' horizontal='center' style={{ backgroundColor: 'grey', minWidth: '400px' }}>
                    <ColumnPanelStyle>
                        <LandingLinkStyle to="/statPage">
                            <Panel location={"Stat Page"} />
                        </LandingLinkStyle>
                    </ColumnPanelStyle>
                    <ColumnPanelStyle>
                        <LandingLinkStyle to="/dashboard">
                            <Panel location={"Dashboard"} />
                        </LandingLinkStyle>
                    </ColumnPanelStyle>
                    <ColumnPanelStyle>
                        <LandingLinkStyle to="/statPage">
                            <Panel location={"Something"} />
                        </LandingLinkStyle>
                    </ColumnPanelStyle>
                </Row>
            </Fill>
        );
    }
}

export default Landing;