import './App.css';
import Counter from './state-management/counter/Counter';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';

function App() {
  return (
    <>
      <Counter />
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
