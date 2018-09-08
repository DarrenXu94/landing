import React, { Component } from 'react';
import MyContext from '../../../MyContext'
import RunOnLifecycle from '../../../RunOnLifecycle'
// Example class of how to use context from life cycle call

class contextTesting extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {(context) =>
                    <RunOnLifecycle
                        runOnMount={() => { console.log(context.state) }}
                        { ...this.props }
                    >
                        <div>testing prop passing here</div>
                        <button onClick={()=>context.updateFunction({test:"updated test"})}>Updated test</button>
                    </RunOnLifecycle>

                }
            </MyContext.Consumer>
        );
    }
}

export default contextTesting;