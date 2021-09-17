import styled from "styled-components";
import { Botao } from "../Botao";
import { ContainerBotoes } from "../Container";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

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
  /* padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px; */
  padding: 10px;
  border-radius: 10px;

  & {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &:first-child {
    margin-bottom: 0;
  }

  &:last-child {
    margin-top: 0;
  }
`;

interface ItemProps {
  tarefa: string;
}

export function Item(props: ItemProps) {
  return (
    <ItemEstilizado>
      <input type="checkbox" name="ticado" id="ticado" />
      <TarefaTitulo>{props.tarefa}</TarefaTitulo>
      <ContainerBotoes>
        <Botao type="button">
          <AiOutlineEdit size={15} />
        </Botao>
        <Botao type="button">
          <AiOutlineDelete size={15} />
        </Botao>
      </ContainerBotoes>
    </ItemEstilizado>
  );
}

const TarefaTitulo = styled.span`
  text-align: start;
  background-color: coral;
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
`;