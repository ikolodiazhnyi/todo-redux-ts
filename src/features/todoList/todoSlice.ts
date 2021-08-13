import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch, AppThunk } from "../../app/store";
import { Todo } from "./types";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { toggleTodo, removeTodo } = todoSlice.actions;

export const addTodo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const newTodo: Todo = {
      id: uuidv4(),
      completed: false,
      text: text,
    };

    dispatch(todoSlice.actions.addTodo(newTodo));
  };

export default todoSlice.reducer;
