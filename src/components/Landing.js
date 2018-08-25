import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import Panel from './Panel'
import LandingHeaderStyle from './LandingHeaderStyle'
import LandingLinkStyle from './LandingLinkStyle'
import Clock from './Clock'

import Fill from './styling/Fill'
import HeaderStyle from './styling/HeaderStyle'

class Landing extends Component {
    render() {
        return (
            <Fill>
                <HeaderStyle horizontal='center'>
                    <LandingHeaderStyle>
                        <h1>
                            <Clock/>
                        </h1>
                    </LandingHeaderStyle>
                </HeaderStyle>

                <Row flexGrow={1} vertical='center' horizontal='center' style={{ backgroundColor: 'grey', minWidth: '400px' }}>
                    <Column>
                        <LandingLinkStyle to="/statPage">
                            <Panel location={"Something"} />
                        </LandingLinkStyle>
                    </Column>  
                    <Column>
                        <LandingLinkStyle to="/statPage">
                            <Panel location={"Something"} />
                        </LandingLinkStyle>
                    </Column>
                    <Column>
                        <LandingLinkStyle to="/statPage">
                            <Panel location={"Something"} />
                        </LandingLinkStyle>
                    </Column>                  
                </Row>
            </Fill>
        );
    }
}

export default Landing;