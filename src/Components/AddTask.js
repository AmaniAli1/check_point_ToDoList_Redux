import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./AddTask.css";
import { addtask } from "../Redux/Adding/ActionAdd";

const AddTask = () => {
  const [todo, setTodo] = useState("");

  //const listofTask = useSelector((state) => state.title);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const HandleClick = () => {
    dispatch(addtask({ id: Math.random(), isDone: false, todo: todo }));
    setTodo("");
  };

  return (
    <div>
      <h2 className="title">
        <i>To Do List</i>
      </h2>
      <hr></hr>
      <div className="input_task">
        <InputGroup size="sm">
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="enter task ..."
            onChange={handleChange}
            value={todo}
          />
        </InputGroup>
        <Button variant="secondary" onClick={HandleClick}>
          Add Task
        </Button>
        <div>
          <h1 id="affiche"></h1>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
