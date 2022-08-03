import { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { getValidationErrors } from '../../utils/getValidationErrors';
import {
  Container,
  Content,
  Background,
} from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e0mail válido'),
        password: Yup
          .string()
          .required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
      });
    }
  }, [signIn, addToast]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">
            Entrar
          </Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="#">
          <FiLogIn size={16} />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}

export { SignIn };
