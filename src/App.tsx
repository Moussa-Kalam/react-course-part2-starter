import './App.css';
import { AuthProvider } from './state-management/auth';
import Counter from './state-management/counter/Counter';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TasksProvider } from './state-management/tasks';

function App() {
  return (
    <AuthProvider>
      <Counter />
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
