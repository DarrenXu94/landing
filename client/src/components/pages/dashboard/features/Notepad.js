import React, { Component, Fragment } from 'react';
import FormatFeature from './FormatFeature'

class Notepad extends Component {
    state = {
        notes: ''
    }

    handleChange = (event) => {
        this.setState({ notes: event.target.value });
        localStorage.setItem('notes', event.target.value);
    }

    getLocalStorage = () => {
        var notes = localStorage.getItem('notes');
        if (notes !== null) this.setState({ notes })
    }

    componentWillMount() {
        this.getLocalStorage()
    }
    render() {
        return (
            <FormatFeature
                heading={`What's on your mind?`}
                info={`Blah blah tech used`}
            >
                <Fragment>
                    <form onSubmit={this.onSubmit}>
                        <label>
                            <textarea rows="12" cols="30" type="text" value={this.state.notes} onChange={this.handleChange} />
                        </label>
                    </form>
                </Fragment>
            </FormatFeature>
        );
    }
}

export default Notepad;