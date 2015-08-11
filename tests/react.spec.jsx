import React from 'react/addons';
import { jsDomReact } from './helpers';
const { TestUtils } = React.addons;

jsDomReact();

describe("Basic React Component Test", () => {
    it('should render a component', () => {
      const component = TestUtils.renderIntoDocument(<div title='working'/>);
      expect(component.props.title).toEqual('working')
    });
});
