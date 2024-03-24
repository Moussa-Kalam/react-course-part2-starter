import { Dispatch } from 'react';
import { Task, TaskAction } from './TasksProvider';
import React from 'react';

// The object to transport using React context
interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

/**
 * Create the context and annotate it with the shape of the object to share
 * Always export it
 */
const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);

export default TasksContext;
