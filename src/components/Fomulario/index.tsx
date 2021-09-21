import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { MensagemErro } from "../../utils/utils";
import { Botao } from "../Botao";
import { Campo } from "../Campo";
import { Mensagem } from "../Mensagem";
import { AiOutlineClear, AiOutlineSave } from "react-icons/ai";
import { ContainerBotoes } from "../Container";

interface FormTypes {
  tarefa: string;
}

const valoresIniciais: FormTypes = {
  tarefa: '',
};

const validacao = Yup.object().shape({
  tarefa: Yup.string().required(MensagemErro('tarefa')),
});

export function Formulario() {
  function handleSubmitForm(values: FormTypes) {
    alert(`Tarefa => ${values.tarefa}`);
  }

  return (
    <>
      <Formik
        initialValues={valoresIniciais}
        validationSchema={validacao}
        onSubmit={handleSubmitForm}
      >
        {({ errors, touched, values }) => (
          <FormularioEstilizado>
            <Campo
              id="tarefa"
              name="tarefa"
              type="text"
              placeholder="Nome da tarefa"
              value={values.tarefa}
              erro={(errors.tarefa && touched.tarefa) ? (<Mensagem mensagem={errors.tarefa}/>) : null}
            />
            <ContainerBotoes>
              <BotaoSalvar type="submit">
                <AiOutlineSave size={15} />
              </BotaoSalvar>
              <BotaoLimpar type="reset">
                <AiOutlineClear size={15} />
              </BotaoLimpar>
            </ContainerBotoes>
          </FormularioEstilizado>
        )}
      </Formik>
    </>
  );
}

const BotaoSalvar = styled(Botao)`
  background-color: deepskyblue;
`;

const BotaoLimpar = styled(Botao)`
  background-color: mediumspringgreen;
`;

const FormularioEstilizado = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;