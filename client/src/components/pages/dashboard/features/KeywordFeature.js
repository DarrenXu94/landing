import React, { Component } from 'react';
import {getKeywords} from '../../../../api/Keywords'

class KeywordFeature extends Component {
    state = {
        keywords: []
    }
    componentWillMount(){
        const url = 'http://api.cortical.io/Text.htm#!/text/getClusterRepresentationsForBulkText_post_5'

        getKeywords(url)
        .then((keywords)=>{
            this.setState({keywords})
        })
    }
    render() {
        return (
            <div>
                {this.state.keywords.map((word,index)=>{
                    return <div key={index}>{word}</div>
                })}
            </div>
        );
    }
}

export default KeywordFeature;