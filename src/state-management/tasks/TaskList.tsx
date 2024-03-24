import useAuthStore from '../auth/store';
import useTaskStore from './store';

const TaskList = () => {
  const { tasks, addTask, deleteTask } = useTaskStore();

  const {user} = useAuthStore() 
  return (
    <>
      <p>{user}</p>
      <button
        onClick={() => addTask({ id: Date.now(), title: 'Task' + Date.now() })}
        className='btn btn-primary my-3'
      >
        Add Task
      </button>
      <ul className='list-group'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <span className='flex-grow-1'>{task.title}</span>
            <button
              className='btn btn-outline-danger'
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
