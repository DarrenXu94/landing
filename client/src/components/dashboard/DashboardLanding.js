import React, { Component, Fragment } from 'react';
import TopPanel from './styling/TopPanelStyle'
import HeaderRow from './styling/HeaderRowStyle'
import BodyRowStyle from './styling/BodyRowStyle';
import PanelRow from './PanelRow'
import { Column } from 'simple-flexbox';

// change he space around

class DashboardLanding extends Component {
    render() {
        return (
            <Fragment>
                <TopPanel>
                    <Fragment></Fragment>
                </TopPanel>
                <HeaderRow>
                    <h1>What would you like to do?</h1>
                </HeaderRow>
                <BodyRowStyle horizontal='center'>
                    <Column style={{justifyContent: "space-around", width: "100%"}}>
                        <PanelRow></PanelRow>
                        <PanelRow></PanelRow>

                    </Column>
                </BodyRowStyle>
            </Fragment>

        );
    }
}

export default DashboardLanding;