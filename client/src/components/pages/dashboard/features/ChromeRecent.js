import React, { Component } from 'react';
import { getChromeHistory } from '../../../../api/ChromeHistory'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FormatFeature from './FormatFeature'

import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledLink = styled.a`
    text-decoration: none;
    :visited {
        color: #8c8c8c;
    }
    :hover {
        color: #bfbfbf;
    }
    ::after {
        content:'';
        padding-right: 8px;
    }

`

const Spacing = styled(CopyToClipboard)`
    color: #8c8c8c;
    :hover {
        color: #bfbfbf;
        cursor: pointer;
    }
`

class ChromeRecent extends Component {
    state = {
        recentlyVisited: { 'Done': [] },
        copied: false
    }

    listOfVisited = () => {
        if (!('Done' in this.state.recentlyVisited)) return
        if (this.state.recentlyVisited.Done.length === 0) return

        return this.state.recentlyVisited.Done.map((value) => {
            return (
                <div key={value.id}>
                    <StyledLink href={value.url}>
                        {(value.title) ? value.title : value.url}
                    </StyledLink>
                    <Spacing onCopy={()=>this.onCopy(value)} text={value.url}>
                        <b><FontAwesomeIcon icon="clone" />
                        {(this.state.copied &&this.state.copied === value.id) &&<b>   Copied</b>}
                        </b>
                    </Spacing>
                </div>
            )
        })
    }

    onCopy = (value) => {
        this.setState({ copied: value.id });
    };

    componentWillMount() {
        getChromeHistory()
            .then((res) => {
                this.setState({ recentlyVisited: res })
            })
            .catch((e)=>{
                console.log(e)
            })
    }

    render() {
        return (
            <FormatFeature
                heading={`Recently Visited Pages`}
                info={info}
            >
                <span>
                    {this.listOfVisited()}
                </span>
            </FormatFeature>
        );
    }
}

export default ChromeRecent;

const info = 
`
* Node API server running to receive requests
* Querying SQLite for Chrome database
* Return last 10 results (ordered)
* Formatting objects with title if exists
* CSS Styling of links in component
* Icon click copies hyperlink to clipboard
* Icon sourced from font-awesome
* Component scrolling without bar
`
