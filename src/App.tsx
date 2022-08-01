import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import GlobalStyle from './styles/global';

import { ToastContainer } from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      {/* <SignUp /> */}

      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
