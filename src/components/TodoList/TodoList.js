import React from "react";
import style from "./TodoList.module.scss";
function TodoList({ todo, setTodo }) {
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} className={style.todoList}>
          <div className={style.item__title}>{item.title}</div>
          <button
            className={style.tools__delete}
            onClick={() => deleteTodo(item.id)}
          ></button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
