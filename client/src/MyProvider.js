import React, { Component } from 'react';
import MyContext from './MyContext'

const MILLIS_BEFORE_NEXT_UPDATE = 5000

class MyProvider extends Component {
    state = {
        update: { test: 'test' },
        updatedAt: null
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                updateFunction: (update) => {
                    console.log(this.state.updatedAt)
                    if (new Date() - new Date(this.state.updatedAt) > MILLIS_BEFORE_NEXT_UPDATE) {
                        this.setState({
                            update, updatedAt: new Date()
                        })
                    }
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider