import { ADD_TASK, DELETE_TASK, EDIT_TASK, DONE_TASK } from "./TypeActionAdd";
import React, { useState } from "react";
import { tasks } from "../states";

// const initialState = [{ title: "task1" }, { title: "task2" }];
const initialState = { tasks };

const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.index
            ? { ...el, todo: action.payload.editedText }
            : el
        ),
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
};

export default AddReducer;
