import { Component } from 'react';

class RunOnLifecycle extends Component {
    componentDidMount() {
        if (this.props.runOnMount != null) {
            this.props.runOnMount();
        }
    }
    render() { return this.props.children || null; }
}

export default RunOnLifecycle