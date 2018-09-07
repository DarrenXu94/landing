import React, { Component, Fragment } from 'react';
import {getChromeHistory} from '../../../../api/ChromeHistory'

import styled from "styled-components"

const StyledLink = styled.a`
    text-decoration: none;
    :visited {
        color: #8c8c8c;
    }
    :hover {
        color: #bfbfbf;
    }
`

class ChromeRecent extends Component {
    state = {
        recentlyVisited: {'Done':[]}
    }

    listOfVisited = () => {
        if (!('Done' in this.state.recentlyVisited)){
            return
        }
        return this.state.recentlyVisited.Done.map((value)=>{
            return (
                <div key={value.id}>
                    <StyledLink href={value.url}>
                        {(value.title)?value.title:value.url}
                    </StyledLink>
                </div>
            )
        })
    }

    componentWillMount(){
        getChromeHistory()
        .then((res)=>{
            this.setState({recentlyVisited:res})
        })
    }

    render() {
        return (
            <Fragment>
                <h3> Recently Visited Pages </h3>
                <span> 
                    {this.listOfVisited()}
                </span>
            </Fragment>
        );
    }
}

export default ChromeRecent;