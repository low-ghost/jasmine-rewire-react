import React from 'react/addons';
import { Mock } from './helpers';
import MainComponent from '../components/MainComponent.jsx';
const { TestUtils } = React.addons;

describe("Basic React Component Test", () => {

    it('should mock a sub component', () => {
        MainComponent.__Rewire__('SubComponent', Mock({ className: 'sub-component', children: 'replaced!' }));
        const component = TestUtils.renderIntoDocument(<MainComponent />);
        const subComponent = TestUtils.findRenderedDOMComponentWithClass(component, 'sub-component');
        expect(subComponent.props.children).toEqual('replaced!');
    })
});
