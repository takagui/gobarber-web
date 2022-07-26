import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  Background,
} from './styles';

const SignIn = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber logo" />

        <form>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">
            Entrar
          </Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

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
