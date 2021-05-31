import { ActionReducerMap } from "@ngrx/store";
import { contadorReducer } from "./component/contador/contador.reducer";
import { filtrosValidos } from "./component/todo-app/filtro/filtro.actions";
import { filtroreducer } from "./component/todo-app/filtro/filtro.reducer";
import { Todo } from "./component/todo-app/models/todo.models";
import { todoReducer } from "./component/todo-app/todo.reducer";

export interface AppState {
  contador: number;
  todos:Todo[];
  filtro: filtrosValidos
}

export const appReducers:ActionReducerMap<AppState> = {
  contador: contadorReducer,
  todos: todoReducer,
  filtro: filtroreducer
}