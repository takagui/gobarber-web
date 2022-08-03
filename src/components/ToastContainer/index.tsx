import { Toast } from './Toast';
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
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  )
}

export {
  ToastContainer
}
