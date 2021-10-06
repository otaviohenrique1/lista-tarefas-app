import styled from "styled-components";
import { Botao } from "../Botao";
import { ContainerBotoes } from "../Container";
import { AiOutlineDelete } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTarefa } from "../../features/TarefasSlice";

interface ItemProps {
  id: string;
  tarefa: string;
}

export function Item(props: ItemProps) {
  const [itemChecked, setItemChecked] = useState<boolean>(true);
  const dispatch = useDispatch();

  function handleApagarItem(event: FormEvent) {
    event.preventDefault();

    dispatch(removeTarefa({
      id: parseInt(props.id),
      tarefa: props.tarefa
    }));
  }

  return (
    <ItemEstilizado>
      <input
        type="checkbox"
        name="check"
        id="checkItem"
        onClick={() => { setItemChecked(!itemChecked); }}
      />
      <TarefaTitulo
        style={{ textDecoration: (!itemChecked) ? 'line-through' : 'none' }}
      >
        {props.tarefa}
      </TarefaTitulo>
      <ContainerBotoes>
        <form onSubmit={handleApagarItem}>
          <BotaoApagar type="submit">
            <AiOutlineDelete size={15} />
          </BotaoApagar>
        </form>
      </ContainerBotoes>
    </ItemEstilizado>
  );
}

const ItemEstilizado = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  border-color: cadetblue;
  border-width: 1px;
  border-style: solid;
  padding: 10px;
  border-radius: 10px;

  & {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &:first-child {
    margin-bottom: 0;
  }
`;

const BotaoApagar = styled(Botao)`
  background-color: orangered;
`;

const TarefaTitulo = styled.span`
  text-align: start;
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
`;

export function ItemListaVazia() {
  return (
    <ItemListaVaziaEstilizado>
      Lista vazia
    </ItemListaVaziaEstilizado>
  );
}

export const ItemListaVaziaEstilizado = styled.li`
  list-style: none;
  font-size: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border-color: cadetblue;
  border-width: 1px;
  border-style: solid;
  padding: 10px;
  border-radius: 10px;
`;
