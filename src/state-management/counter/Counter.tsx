import useCounterStore from './store';

const Counter = () => {
  const { counter, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className='btn btn-primary mx-1'>
        Increment
      </button>
      <button onClick={() => decrement()} className='btn btn-primary mx-1'>
        Decrement
      </button>
      <button onClick={() => reset()} className='btn btn-primary mx-1'>
        Reset
      </button>
    </div>
  );
};

export default Counter;
