import React, { Component, Fragment } from 'react';
import TopPanel from './styling/TopPanelStyle'
import HeaderRow from './styling/HeaderRowStyle'
import BodyRowStyle from './styling/BodyRowStyle';
import PanelRow from './PanelRow'
import { Column } from 'simple-flexbox';
import Fill from '../../styling/Fill'
import './style.css'

// Components to load
import ChromeRecent from './features/ChromeRecent'
import Notepad from './features/Notepad'
import KeywordFeature from './features/KeywordFeature'

// const h1DivStyle = {
//     position: 'relative',
//     display: 'inline-block',
//     overflow: 'hidden',
// }

class DashboardLanding extends Component {
    render() {
        return (
            <Fill>
                <TopPanel>
                    <Fragment></Fragment>
                </TopPanel>
                <HeaderRow>
                    <div className='anim'>
                        <h1 className='animh1'>What would you like to do?</h1>
                    </div>
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
                                <ChromeRecent/>, 
                                <ChromeRecent/>
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