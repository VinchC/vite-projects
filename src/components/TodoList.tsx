import { useState } from "react";
import TodoTypes from "../todo";
import TodoService from "../TodoService";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
  const [editingTodoId, setEditedTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string | null>("");

  return <></>;
};

export default TodoList;
