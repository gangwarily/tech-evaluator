import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import Counter from '../counter/Counter';
import Regular from './Regular';
import Pure from './Pure';
// import styles from './App.css';

export type SomeType = {
    foo: string;
    bar: number;
};

type State = {
    foo: string;
};

const func = () => {};

const AppHook = () => {
    const [foo, setFoo] = useState('bar');

    useEffect(() => {
        setInterval(() => setFoo('bar'), 2000);
    }, []);

    return (
        <div>
            <Regular text="This is a regular component" foo={func} />
            <Pure text="This is a pure component" foo={func} />
        </div>
    );
};

class AppClass extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                foo: 'bar',
            });
        }, 2000);
    }

    fizzbuzz = () => console.log('fizzbuzz!');

    render() {
        const blah = () => {};
        return (
            <div>
                <Regular text="This is a regular component" foo={blah} />
                <Pure text="This is a pure component" foo={blah} />
            </div>
        );
    }
}

export default AppHook;
