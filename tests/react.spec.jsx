import React from 'react/addons';
import MainComponent from '../components/MainComponent.jsx';
import { jsDomReact } from './helpers';
const { TestUtils } = React.addons;

jsDomReact();

describe("Basic React Component Test", () => {
    it('should render a component', () => {
      const component = TestUtils.renderIntoDocument(<div title='working'/>);
      expect(component.props.title).toEqual('working')
    });

    it('should render a nested component', () => {
        const component = TestUtils.renderIntoDocument(<MainComponent />);
        const subComponent = TestUtils.findRenderedDOMComponentWithClass(component, 'sub-component');
        expect(subComponent.props.children).toEqual('content to be replaced');
    })
});
