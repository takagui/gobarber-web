import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      {/* <SignUp /> */}
      <GlobalStyle />
    </>
  );
}

export default App;
