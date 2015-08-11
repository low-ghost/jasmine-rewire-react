import React, { Component } from 'react';
import SubComponent from './SubComponent';

export default class MainComponent extends Component {
    render() {
        return <div className='main-component'>
        <SubComponent />
        main content</div>;
    }
}
