import React from "react";
// import PropTypes from "prop-types";

// Todo.propTypes = {};

const Todo = (props) => {
  const { todos, title, deleteDataTodo } = props;
  const handleDelete = (id) => {
    deleteDataTodo(id);
  };

  return (
    <div className="todo-container">
      <div className="title">{title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title} &nbsp; &nbsp;
              <span
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                x
              </span>
            </li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
