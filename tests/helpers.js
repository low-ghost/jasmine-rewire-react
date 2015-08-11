import React, { PropTypes, Component, createClass } from 'react';
import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';

//Minimal Provider mock
export class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object.isRequired
    }

    getChildContext() {
        return { store: this.props.store };
    }

    render() {
        return this.props.children();
    }
}

export const Mock = (props) => {
    class MockComponent extends Component {
        render() {
            return <div {...props} />;;
        }
    }
    return MockComponent;
}
