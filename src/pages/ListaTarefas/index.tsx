import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ContainerApp } from "../../components/Container";
import { Formulario } from "../../components/Fomulario";
import { Lista } from "../../components/Lista";
import { Titulo } from "../../components/Titulo";

interface DataTypeTarefa {
  id: number,
  tarefa: string;
}

export function ListaTarefas() {
  const selector = useSelector((state: RootState) => state);
  const [data, setData] = useState<DataTypeTarefa[]>([]);

  useEffect(() => {
    setData(selector.tarefa.tarefas);
  }, [selector.tarefa.tarefas]);

  return (
    <ContainerApp>
      <Titulo titulo="Lista de tarefas" />
      <Formulario />
      <Lista
        data={data}
      />
    </ContainerApp>
  );
}
