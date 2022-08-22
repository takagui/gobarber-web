import {
  Navigate,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRouteProps {
  children: any;
}

const PrivateRoute = ({ children }: IRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={'/'} replace />
  }

  return children;
}

export { PrivateRoute };
