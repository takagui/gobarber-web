import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

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

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
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
    } catch (error: any) {
      console.log({error});

      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, [])

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
