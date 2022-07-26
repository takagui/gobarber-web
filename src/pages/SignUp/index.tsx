import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  Background,
} from './styles';
import { useCallback } from 'react';

const SignUp = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
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
    } catch (error) {
      console.log({error});
    }
  }, [])

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber logo" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">
            Cadastrar
          </Button>
        </Form>

        <a href="#">
          <FiArrowLeft size={16} />
          Voltar para logon
        </a>
      </Content>
    </Container>
  )
}

export { SignUp };
