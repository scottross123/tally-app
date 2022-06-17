import { useCounter } from '../hooks/useCounter';

const Counter = () => {
    const { value, increment, decrement, reset } = useCounter({ initialValue: 2, initialIncStep: 2});

    return (
        <div>
            <h1>{ value }</h1>

            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default Counter;