import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  Background,
} from './styles';

const SignUp = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber logo" />

        <form>
          <h1>Faça seu logon</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <a href="#">
          <FiArrowLeft size={16} />
          Voltar para logon
        </a>
      </Content>
    </Container>
  )
}

export { SignUp };
