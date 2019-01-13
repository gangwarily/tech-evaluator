import React from 'react';
import App from '../../src/js/app/App';
import { View, Text } from 'react-native';
import TestRenderer from 'react-test-renderer';

describe('App component unit test', () => {
    it('render test', () => {
        const renderer = TestRenderer.create(<App />);
        const root = renderer.root;

        expect(root).not.toBeNull();
        expect(renderer.toJSON()).toMatchSnapshot();

        const view = root.findByType(View);
        expect(root.findAllByType(View).length).toEqual(1);

        const text = view.findByType(Text);
        expect(root.findAllByType(Text).length).toEqual(1);
        // TODO: Figure out source of this issue
        // expect(text.children[0]).toEqual('Hello!');
    })
});