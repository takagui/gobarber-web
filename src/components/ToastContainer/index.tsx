import { Toast } from './Toast';
import { useTransition } from 'react-spring';

import { Container } from './styles';

interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface IToastContainer {
  messages: IToastMessage[];
}

const ToastContainer = ({ messages }: IToastContainer) => {
  const messagesWithTransitions = useTransition(
    messages,
    {
      from: { right: '-120%', opacity: '0' },
      enter: { right: '0%', opacity: '1' },
      leave: { right: '-120%', opacity: '0' },
    }
  );

  return (
    <Container>
      {messagesWithTransitions((style, message) => (
        <Toast key={message.id} message={message} style={style} />
      ))}
    </Container>
  )
}

export {
  ToastContainer
}
