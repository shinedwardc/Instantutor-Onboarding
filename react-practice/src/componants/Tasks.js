import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  // using a list with a key prop
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks