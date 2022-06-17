import { useState } from 'react';

interface counterState {
    value: number,
    increment: () => void,
    decrement: () => void,
    reset: () => void,
}

export const useCounter = (initialCount: number = 0): counterState => {
    const [count, setCount] = useState<number>(initialCount);

    return {
        value: count,
        increment: () => setCount(count => count + 1),
        decrement: () => setCount(count => count - 1),
        reset: () => setCount(initialCount),
    }
}


// change this to useReducer. add custom step for inc and dec