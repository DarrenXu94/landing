import React, { Component, Fragment } from 'react';
import TopPanel from './styling/TopPanelStyle'
import HeaderRow from './styling/HeaderRowStyle'
import BodyRowStyle from './styling/BodyRowStyle';
import PanelRow from './PanelRow'
import { Column } from 'simple-flexbox';
import Fill from '../../styling/Fill'

// Components to load
import ChromeRecent from './features/ChromeRecent'
import Notepad from './features/Notepad'
import KeywordFeature from './features/KeywordFeature'
import FormatFeature from './features/FormatFeature'
import TransitionFeature from './features/TransitionFeature'

import HeadingStyle from './styling/HeadingStyle'


class DashboardLanding extends Component {
    render() {
        return (
            <Fill>
                <TopPanel>
                    <Fragment></Fragment>
                </TopPanel>
                <HeaderRow>
                    <HeadingStyle>
                        <h1>What would you like to do?</h1>
                    </HeadingStyle>
                </HeaderRow>
                <BodyRowStyle horizontal='center'>
                    <Column style={{justifyContent: "space-around", width: "100%"}}>
                        <PanelRow
                            multipleChildren = {
                                [
                                <ChromeRecent/>, 
                                <Notepad/>,
                                <KeywordFeature/>
                                ]
                            }
                        />
                        <PanelRow
                            multipleChildren = {
                                [
                                <FormatFeature heading={`Test heading`}/>, 
                                <ChromeRecent/>,
                                <TransitionFeature />
                                ]
                            }
                        />

                    </Column>
                </BodyRowStyle>
            </Fill>

        );
    }
}

export default DashboardLanding;