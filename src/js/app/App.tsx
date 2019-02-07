import React, { useState, useEffect } from 'react';
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

type Props = {
    aNumber: number;
};

const AppHook = (props: Props) => {
    const [foo, setFoo] = useState('bar');

    useEffect(() => {
        setInterval(() => setFoo('bar'), 5000);
    }, []);

    const func = e => {
        console.log(e.target);
        console.log(`Hello! I am callback and my value is ${props.aNumber}`);
    };

    return (
        <div>
            <Regular text="This is a regular component" foo={func} />
            <Pure text="This is a pure component" foo={func} />
        </div>
    );
};

class AppClass extends React.Component<Props, State> {
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
        }, 5000);
    }

    func = () => console.log('fizzbuzz!');

    render() {
        return (
            <div>
                <Regular text="This is a regular component" foo={this.func} />
                <Pure text="This is a pure component" foo={this.func} />
            </div>
        );
    }
}

export default AppHook;
