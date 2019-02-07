import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
    text: string;
    foo: any;
};

const Pure = React.memo(({ text, foo }: Props) => {
    console.log('rendering pure component');
    return (
        <Button variant="contained" type="button" color="primary" onClick={foo}>
            {text}
        </Button>
    );
});

export default Pure;
