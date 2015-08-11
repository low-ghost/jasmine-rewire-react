import { PropTypes, Component, createClass } from 'react';
import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';
import { jsdom } from 'jsdom';

//basic fake dom for react rendering
export const jsDomReact = (markup = '<html><body></body></html>') => {
  global.document = jsdom(markup);
  global.window = document.defaultView;
  global.navigator = { userAgent: 'node.js' };
  ExecutionEnvironment.canUseDOM = true;
}

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

export class Mock extends Component {
    render() {
        return <div />;;
    }
}
