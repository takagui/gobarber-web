import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { AppProvider } from './hooks';
import { Router } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
