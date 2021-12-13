import { ADD_TASK, DELETE_TASK, EDIT_TASK, DONE_TASK } from "./TypeActionAdd";

export const addtask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const deletetask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const editTask = (p) => {
  return {
    type: EDIT_TASK,
    payload: p,
  };
};
export const doneTask = (id) => {
  return {
    type: DONE_TASK,
    payload: id,
  };
};
