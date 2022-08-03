import { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import { ToastContainer } from '../components/ToastContainer';

interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface IToastContext {
  addToast: (message: Omit<IToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

interface IToastProvider {
  children: React.ReactNode;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

const ToastProvider = ({ children }: IToastProvider) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(({type, title, description}: Omit<IToastMessage, 'id'>) => {
    const id = uuidV4();
    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages((oldMessages) => [...oldMessages, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast}}>
      {children}

      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

function useToast(): IToastContext {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export {
  ToastProvider,
  useToast,
}
