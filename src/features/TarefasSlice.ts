import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TarefaState {
  id: number,
  tarefa: string;
}

export interface TarefasState {
  tarefas: TarefaState[];
}

const tarefaInitialState: TarefasState = {
  tarefas: [],
};

export const tarefaSlice = createSlice({
  name: 'tarefa',
  initialState: tarefaInitialState,
  reducers: {
    adicionaTarefa: (state, action: PayloadAction<TarefaState>) => {
      const novaTarefa: TarefaState = {
        id: action.payload.id,
        tarefa: action.payload.tarefa,
      };
      return {
        ...state,
        tarefas: state.tarefas.concat(novaTarefa)
      };
    },
    removeTarefa: (state, action: PayloadAction<TarefaState>) => {
      const tarefaRemovida: TarefaState[] = state.tarefas.filter((tarefa) => tarefa.id !== action.payload.id);
      return {
        ...state,
        tarefas: tarefaRemovida
      };
    }
  }
});

export const {
  adicionaTarefa,
  removeTarefa
} = tarefaSlice.actions;

export default tarefaSlice.reducer;