import { createContext, useContext, useEffect, useState } from "react";
import useTasks from "../hooks/useTasks.js";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

  const {
    allTasks,
    changeTitleTask,
    addNewTaskToList,
    deleteCompletedTasks,
    handleComplete
  } = useTasks();

  return (
    <TasksContext.Provider
      value={{
        allTasks,
        changeTitleTask,
        addNewTaskToList,
        deleteCompletedTasks,
        handleComplete,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);