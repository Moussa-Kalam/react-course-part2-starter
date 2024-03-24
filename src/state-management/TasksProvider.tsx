import { PropsWithChildren, useReducer } from 'react';
import taskReducer from './reducers/taskReducer';
import TasksContext from './contexts/tasksContext';

const TasksProvider = ({ children }: PropsWithChildren) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
