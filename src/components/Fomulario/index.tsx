import { Formik, Form, FormikHelpers } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { MensagemErro } from "../../utils/utils";
import { Botao } from "../Botao";
import { Campo } from "../Campo";
import { Mensagem } from "../Mensagem";
import { AiOutlineClear, AiOutlineSave } from "react-icons/ai";
import { ContainerBotoes } from "../Container";
import { useDispatch } from "react-redux";
import { adicionaTarefa } from "../../features/TarefasSlice";

export interface FormTypes {
  tarefa: string;
}

export const valoresIniciais: FormTypes = {
  tarefa: '',
};

export const validacao = Yup.object().shape({
  tarefa: Yup.string().required(MensagemErro('tarefa')),
});

export function Formulario() {
  const dispatch = useDispatch();

  function handleSubmitForm(values: FormTypes, formikHelpers: FormikHelpers<FormTypes>) {
    // alert(`Tarefa => ${values.tarefa}`);
    const id = Math.floor(Math.random() * 100000);

    dispatch(adicionaTarefa({
      id: id,
      tarefa: values.tarefa
    }));
    alert('Item salvo');

    formikHelpers.resetForm();
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
            <ContainerBotoesEstilizado>
              <BotaoSalvar type="submit">
                <AiOutlineSave size={15} />
              </BotaoSalvar>
              <BotaoLimpar type="reset">
                <AiOutlineClear size={15} />
              </BotaoLimpar>
            </ContainerBotoesEstilizado>
          </FormularioEstilizado>
        )}
      </Formik>
    </>
  );
}

const ContainerBotoesEstilizado = styled(ContainerBotoes)`
  margin-left: 15px;
`;

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