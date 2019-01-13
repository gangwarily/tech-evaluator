import React from 'react';
import App from '../../src/js/app/App';
import TestRenderer from 'react-test-renderer';

describe('App component unit test', () => {
    it('render test', () => {
        const renderer = TestRenderer.create(<App />);
        const root = renderer.root;

        expect(root).not.toBeNull();
        expect(renderer.toJSON()).toMatchSnapshot();

        const div = root.findByType('div');
        expect(root.findAllByType('div').length).toEqual(1);

        const span = div.findByType('span');
        expect(root.findAllByType('span').length).toEqual(1);
        expect(span.children[0]).toEqual('Hello!');
    })
});