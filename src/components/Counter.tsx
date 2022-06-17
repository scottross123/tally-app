import { useCounter } from '../hooks/useCounter';

const Counter = () => {
    const { value, increment, decrement, reset } = useCounter(5);

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