// import { ReactNode } from "react";
import styled from "styled-components";
import { TarefaState } from "../../features/TarefasSlice";
import { Item, ItemListaVazia } from "../Item";

interface ListaProps {
  data: TarefaState[];
  // children: ReactNode;
}

export function Lista(props: ListaProps) {
  return (
    <ListaEstilizada>
      {(props.data.length === 0) ? (
        <ItemListaVazia/>
      ) : props.data.map((item, index) => {
        return (
          <Item
            key={index}
            id={(item.id).toString()}
            tarefa={item.tarefa}
          />
        );
      })}
    </ListaEstilizada>
  );
}

const ListaEstilizada = styled.ul`
  padding-inline-start: 0;
`;