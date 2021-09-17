import { ReactNode } from "react";
import styled from "styled-components";

interface ListaProps {
  children: ReactNode;
}

export function Lista(props: ListaProps) {
  return (
    <ListaEstilizada>
      {props.children}
    </ListaEstilizada>
  );
}

const ListaEstilizada = styled.ul`
  padding-inline-start: 0;
`;