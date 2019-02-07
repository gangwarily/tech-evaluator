import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
    text: string;
    foo: any;
};

const Regular = ({ text, foo }: Props) => {
    console.log('rendering regular component');
    return (
        <Button variant="contained" type="button" color="secondary" onClick={foo}>
            {text}
        </Button>
    );
};

export default Regular;
