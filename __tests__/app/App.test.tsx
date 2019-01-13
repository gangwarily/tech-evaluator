import React from 'react';
import Button from '@material-ui/core/Button';
import TestRenderer, {
    ReactTestInstance,
    ReactTestRenderer,
} from 'react-test-renderer';
import App from '../../src/js/app/App';

describe('App component unit test', () => {
    it('render test', () => {
        const renderer: ReactTestRenderer = TestRenderer.create(<App />);

        // You can use this syntax to allow both explicit typing and object destructure
        // in the same line. I think it's super ugly.
        // const { root }: { root: ReactTestInstance } = renderer;

        const { root } = renderer;

        expect(root).not.toBeNull();
        expect(renderer.toJSON()).toMatchSnapshot();

        const div: ReactTestInstance = root.findByType('div');
        expect(root.findAllByType('div').length).toEqual(1);

        const button: ReactTestInstance = div.findByType(Button);
        expect(root.findAllByType(Button).length).toEqual(1);
        expect(button.props.children).toEqual('Hello!');
    });
});
