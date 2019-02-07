import React from 'react';

type Props = {
    text: string;
    foo: Function;
};

const Pure = React.memo(({ text }: Props) => {
    console.log('rendering pure component');
    return <div>{text}</div>;
});

export default Pure;
