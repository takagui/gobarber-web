import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return (
    <AuthProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AuthProvider>
  )
}

export {
  AppProvider,
};
