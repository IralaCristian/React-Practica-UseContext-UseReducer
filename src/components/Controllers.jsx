import styles from "./Controllers.module.css";
import { Link } from "react-router-dom";
import { useTasksContext } from "../providers/TasksProvider";

const Controllers = () => {
  const { deleteCompletedTasks } =useTasksContext();

  return (
    <div className={styles.container}>
      <Link className={styles.createButton} to="/new">
        Create Task
      </Link>
      <button onClick={deleteCompletedTasks}>Delete Completed Tasks</button>
    </div>
  );
};

export default Controllers;
