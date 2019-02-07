import React from 'react';

type Props = {
    text: string;
    foo: Function;
};

const Regular = ({ text }: Props) => {
    console.log('rendering regular component');
    return <div>{text}</div>;
};

export default Regular;
