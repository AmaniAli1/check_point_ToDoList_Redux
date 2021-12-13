import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, ListGroup, Button } from "react-bootstrap";
import { deletetask, editTask, doneTask } from "../Redux/Adding/ActionAdd";
import "./TaskItem.css";

const TaskItem = ({ el }) => {
  const [edit, setEdit] = useState(false);
  const [todoEdit, setTodoEdit] = useState(el.todo);

  const dispatch = useDispatch();

  const deleting = () => {
    dispatch(deletetask(el.id));
  };

  const Save = () => {
    dispatch(editTask({ index: el.id, editedText: todoEdit }));
  };
  const Done = () => {
    dispatch(doneTask(el.id));
  };

  return (
    <div className="card_task">
      <Card style={{ width: "40rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item
            style={{
              backgroundColor: "cadetblue",
              margin: "10px",
            }}
          >
            {edit ? (
              <input
                type="text"
                value={todoEdit}
                onChange={(e) => setTodoEdit(e.target.value)}
              />
            ) : (
              <h6
                style={{
                  textDecoration: el.isDone ? "line-through" : "none",
                }}
              >
                {el.todo}
              </h6>
            )}
            <Button
              variant="info"
              onClick={() => {
                Save();
                edit && setTodoEdit(el.todo);
                setEdit(!edit);
              }}
            >
              {edit ? "Save" : "Edit"}
            </Button>
            <Button variant="success" onClick={Done}>
              Done
            </Button>
            <Button variant="danger" onClick={deleting}>
              Delete
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default TaskItem;
