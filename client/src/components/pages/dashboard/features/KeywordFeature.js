import React, { Component } from 'react';
import { getKeywords } from '../../../../api/Keywords'
import FormatFeature from './FormatFeature'

class KeywordFeature extends Component {
    state = {
        keywords: [],
        url: '',
        loading: false,
        error: null
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
            .catch((e) => {
                let error = e
                if (e instanceof TypeError) error = `${error}. Check the console for CORS`
                this.setState({ loading: false, error: `Error: ${error}` })
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
            <FormatFeature
                heading={`What keywords are on a website?`}
                info={`Blah blah tech used`}
            >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Website:
                        <input type="text" name="name" value={this.state.url} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.runDemo}>Demo</button>
                {this.state.loading && <div>Loading ... </div>}
                {this.state.error && <div>{this.state.error}</div>}
                {this.state.keywords.map((word, index) => {
                    return <div key={index}>{word}</div>
                })}
            </FormatFeature>
        );
    }
}

export default KeywordFeature;