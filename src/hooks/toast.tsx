import { createContext, useContext, useCallback } from 'react';

import { ToastContainer } from '../components/ToastContainer';

interface IToastContext {
  addToast: () => void;
  removeToast: () => void;
}

interface IToastProvider {
  children: React.ReactNode;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

const ToastProvider = ({ children }: IToastProvider) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast}}>
      {children}

      <ToastContainer />
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
