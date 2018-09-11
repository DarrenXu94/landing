import React, { Component } from 'react';
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
                info={info}
            >
                <form>
                    <label>
                        <textarea rows="12" cols="40" type="text" value={this.state.notes} onChange={this.handleChange} />
                    </label>
                </form>
            </FormatFeature>
        );
    }
}

export default Notepad;

const info = 
`
* Localstorage for reading and writing
* Input field handling changes
`
