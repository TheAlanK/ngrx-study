import { createAction, createReducer, on, props } from "@ngrx/store"

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 0
}

export const actionsContador = createAction('[App] Ações do Contador', props<{payload: any}>());

export const appReducer = createReducer(
  appInitialState,
  on(actionsContador, (state, {payload}) => {
    state = {
      counter : payload
    }
    return state;
  })

)
