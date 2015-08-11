import React from 'react/addons';
var rewire = require("rewire");
import { Mock } from './helpers';
var MainComponent = rewire('../components/MainComponent.jsx');
const { TestUtils } = React.addons;

describe("Basic React Component Test", () => {

    it('should mock a sub component', () => {
        MainComponent.__set__('SubComponent', Mock({ className: 'sub-component', children: 'replaced!' }));
        const component = TestUtils.renderIntoDocument(<MainComponent />);
        const subComponent = TestUtils.findRenderedDOMComponentWithClass(component, 'sub-component');
        expect(subComponent.props.children).toEqual('replaced!');
    })
});
