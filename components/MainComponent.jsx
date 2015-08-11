import React, { Component } from 'react';
var SubComponent = require('./SubComponent');

export default class MainComponent extends Component {
    render() {
        return <div className='main-component'>
        <SubComponent />
        main content</div>;
    }
}
