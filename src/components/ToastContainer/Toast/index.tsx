import { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

import { useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface IToast {
  message: IToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
}

const Toast = ({ message, style }: IToast) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description} key={message.id} style={style}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {
          !!message.description &&
            <p>{message.description}</p>
        }
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
}

export { Toast };
