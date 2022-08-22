import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

const Router = () => (
  <Routes>
    <Route path='/' element={<SignIn />} />
    <Route path='/signup' element={<SignUp />} />
  </Routes>
);

export { Router };
