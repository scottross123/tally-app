import { useReducer, useCallback } from 'react';

interface counterProps {
    initialValue?: number,
    initialIncStep?: number,
    initialDecStep?: number,
    initialResetTo?: number,
}

interface counterState {
    value: number,
    incStep: number,
    decStep: number,
    resetTo: number,
}

type ACTION = 
    | { type: 'increment'; payload: number }
    | { type: 'decrement'; payload: number }
    | { type: 'reset'; payload: number }
    | { type: 'set-inc-step'; payload: number }
    | { type: 'set-dec-step'; payload: number }

export const useCounter = (props: counterProps) => {
    const { initialValue, initialIncStep, initialDecStep, initialResetTo } = props;
    const initialState: counterState = {
        value: initialValue ?? 0,
        incStep: initialIncStep ?? 1,
        decStep: initialDecStep ?? 1,
        resetTo: initialResetTo ?? initialValue ?? 0,
    };

    const reducer = useCallback((state: counterState, action: ACTION): counterState => {
        switch (action.type) {
            case 'increment':
                return {
                    ...state,
                    value: state.value + action.payload
                }
            case 'decrement':
                return { 
                    ...state,
                    value: state.value - action.payload
                }
            case 'reset':
                return { 
                    ...state,
                    value: action.payload
                }
            case 'set-inc-step':
                return { 
                    ...state,
                    incStep: action.payload
                }
            case 'set-dec-step':
                return { 
                    ...state,
                    decStep: action.payload
                }
            default:
                throw new Error();
        }
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        value: state.value,
        increment: () => dispatch({ type: 'increment', payload: state.incStep }),
        decrement: () => dispatch({ type: 'decrement', payload: state.decStep }),
        reset: () => dispatch({ type: 'reset', payload: state.resetTo }),
        //setIncStep: () => dispatch({ type: 'set-inc-step', payload: initialIncStep ?? 1 }),
        //setDecStep: () => dispatch({ type: 'set-dec-step', payload: initialDecStep ?? 1}),
    }
}


// change this to useReducer. add custom step for inc and dec