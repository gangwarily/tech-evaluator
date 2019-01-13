export const hello = (not: boolean=false) => {
    if(not) {
        return 'notHello';
    }
    else {
        return 'hello';
    }
};

export const notHello = () => ('notHello');