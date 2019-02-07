import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button type="button" onClick={() => setCount(count + 1)}>
                Click Me
            </Button>
        </div>
    );
};

export default Counter;
