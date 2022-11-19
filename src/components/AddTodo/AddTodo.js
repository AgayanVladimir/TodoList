import React, { useState } from "react";
import style from "./AddTodo.module.scss";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  return (
    <div>
      <label>
        <input
          className={style.addTodo}
          type="text"
          placeholder="Введите задачу"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className={style.button}
          type="submit"
          value="Добавить задачу"
          onClick={saveTodo}
        />
      </label>
    </div>
  );
}
export default AddTodo;
