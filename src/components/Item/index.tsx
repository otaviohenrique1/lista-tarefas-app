import styled from "styled-components";
import { Botao } from "../Botao";
import { ContainerBotoes } from "../Container";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTarefa } from "../../features/TarefasSlice";

interface ItemProps {
  id: string;
  tarefa: string;
}

export function Item(props: ItemProps) {
  const [itemChecked, setItemChecked] = useState<boolean>(true);
  const [modoEdicaoItem, setModoEdicaoItem] = useState<boolean>(false);
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
        disabled={(modoEdicaoItem) ? true : false}
      />
      {(modoEdicaoItem) ? (
        <>
          <CampoItem
            type="text"
            value={props.tarefa}
            onChange={() => {}}
          />
          <ContainerBotoes>
            <BotaoSalvar
              type="button"
              onClick={() => setModoEdicaoItem(!modoEdicaoItem)}
            >
              <AiOutlineCheckCircle size={15} />
            </BotaoSalvar>
            <BotaoCancelar
              type="button"
              onClick={() => setModoEdicaoItem(!modoEdicaoItem)}
            >
              <AiOutlineCloseCircle size={15} />
            </BotaoCancelar>
          </ContainerBotoes>
        </>
      ) : (  
        <>
          <TarefaTitulo
            style={{ textDecoration: (!itemChecked) ? 'line-through' : 'none' }}
          >
            {props.tarefa}
          </TarefaTitulo>
          <ContainerBotoes>
            <BotaoEditar
              type="button"
              onClick={() => setModoEdicaoItem(!modoEdicaoItem)}
            >
              <AiOutlineEdit size={15} />
            </BotaoEditar>
            <form onSubmit={handleApagarItem}>
              <BotaoApagar
                type="submit"
              >
                <AiOutlineDelete size={15} />
              </BotaoApagar>
            </form>
          </ContainerBotoes>
        </>
      )}
    </ItemEstilizado>
  );
}

const CampoItem = styled.input`
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 15px;
`;

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

  /* &:last-child {
    margin-top: 0;
  } */
`;

const BotaoEditar = styled(Botao)`
  background-color: gold;
`;

const BotaoApagar = styled(Botao)`
  background-color: orangered;
`;

const BotaoSalvar = styled(Botao)`
  background-color: chartreuse;
`;

const BotaoCancelar = styled(Botao)`
  background-color: palevioletred;
`;

const TarefaTitulo = styled.span`
  text-align: start;
  /* background-color: coral; */
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