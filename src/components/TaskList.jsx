import Task from "./Task";
import { useTasksContext } from "../providers/TasksProvider";

const TaskList = () => {
  const { allTasks, handleComplete } = useTasksContext();

  return (
    <>
      {allTasks.map((task) => {
        return (
          <Task
            key={task.id}
            taskId={task.id}
            title={task.title}
            completed={task.completed}
            handleComplete={() => handleComplete(task.id)}
          />
        );
      })}
    </>
  );
};
export default TaskList;
