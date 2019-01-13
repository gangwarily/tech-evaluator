import React from 'react';
import App from '../../src/js/app/App';
import TestRenderer, {ReactTestInstance, ReactTestRenderer} from 'react-test-renderer';

describe('App component unit test', () => {
    it('render test', () => {
        const renderer: ReactTestRenderer = TestRenderer.create(<App />);
        const root: ReactTestInstance = renderer.root;

        expect(root).not.toBeNull();
        expect(renderer.toJSON()).toMatchSnapshot();

        const div: ReactTestInstance = root.findByType('div');
        expect(root.findAllByType('div').length).toEqual(1);

        const span: ReactTestInstance = div.findByType('span');
        expect(root.findAllByType('span').length).toEqual(1);
        expect(span.children[0]).toEqual('Hello!');
    })
});