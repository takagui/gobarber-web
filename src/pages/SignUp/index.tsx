import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { api } from '../../services/api';
import { useToast } from '../../hooks/toast';
import { getValidationErrors } from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  AnimationContainer,
  Background,
} from './styles';
import { useCallback } from 'react';

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (data: ISignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e0mail válido'),
        password: Yup
          .string()
          .min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/v1/users', data);

      navigate('/', { replace: true })

      addToast({
        type: 'success',
        title: 'Cadastro Realizado!',
        description: 'Você já pode fazer seu login no GoBarber',
      });
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Erro na cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
      });
    }
  }, [addToast, navigate])

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

            <Button type="submit">
              Cadastrar
            </Button>
          </Form>

          <Link to='/'>
            <FiArrowLeft size={16} />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export { SignUp };
