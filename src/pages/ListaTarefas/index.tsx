import { ContainerApp } from "../../components/Container";
import { Formulario } from "../../components/Fomulario";
import { Item } from "../../components/Item";
import { Lista } from "../../components/Lista";
import { Titulo } from "../../components/Titulo";

export function ListaTarefas() {
  return (
    <ContainerApp>
      <Titulo titulo="Lista de tarefas" />
      <Formulario />
      <Lista>
        <Item tarefa="1 - asd" />
        <Item tarefa="2 - asd" />
        <Item tarefa="3 - asd" />
        <Item tarefa="4 - asd" />
        <Item tarefa="5 - asd" />
        <Item tarefa="6 - asd" />
        <Item tarefa="7 - asd" />
        <Item tarefa="8 - asd" />
        <Item tarefa="9 - asd" />
        <Item tarefa="10 - asd" />
        <Item tarefa="11 - asd" />
        <Item tarefa="12 - asd" />
        <Item tarefa="13 - asd" />
        <Item tarefa="14 - asd" />
        <Item tarefa="15 - asd" />
        <Item tarefa="16 - asd" />
        <Item tarefa="17 - asd" />
        <Item tarefa="18 - asd" />
        <Item tarefa="19 - asd" />
        <Item tarefa="20 - asd" />
      </Lista>
    </ContainerApp>
  );
}