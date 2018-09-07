import React, { Component, Fragment } from 'react';

class Notepad extends Component {
    state = {
        notes: ''
    }

    handleChange = (event) => {
        this.setState({notes: event.target.value});
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
            <Fragment>
                <h3> What's on your mind? </h3>
                <form onSubmit={this.onSubmit}>
                    <label>
                        <textarea rows="8" cols="40" type="text" value={this.state.notes} onChange={this.handleChange} />
                    </label>
                </form>
            </Fragment>
        );
    }
}

export default Notepad;