import { useReducer } from 'react';

interface Action {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET';
}

const counterReducer = (state: number, action: Action): number => {
  if (action.type === 'INCREMENT') return state + 1;
  if (action.type === 'DECREMENT') return state - 1;
  if (action.type === 'RESET') return 0;
  return state;
};

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className='btn btn-primary mx-1'
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className='btn btn-primary mx-1'
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className='btn btn-primary mx-1'
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
