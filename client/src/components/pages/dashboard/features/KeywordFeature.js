import React, { Component, Fragment } from 'react';
import { getKeywords } from '../../../../api/Keywords'

class KeywordFeature extends Component {
    state = {
        keywords: [],
        url: '',
        loading: false
    }

    handleChange = (event) => {
        this.setState({ url: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        getKeywords(this.state.url)
            .then((keywords) => {
                this.setState({ keywords, loading: false })
            })
    }

    runDemo = () => {
        const url = 'http://api.cortical.io/Text.htm#!/text/getClusterRepresentationsForBulkText_post_5'
        this.setState({ loading: true });

        getKeywords(url)
            .then((keywords) => {
                this.setState({ keywords, loading: false })
            })
    }
    render() {
        return (
            <Fragment>
                <h3> What keywords are on a website? </h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Website: 
                        <input type="text" name="name" value={this.state.url} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.runDemo}>Demo</button>
                {this.state.loading && <div>Loading ... </div>}

                {this.state.keywords.map((word, index) => {
                    return <div key={index}>{word}</div>
                })}
            </Fragment>
        );
    }
}

export default KeywordFeature;