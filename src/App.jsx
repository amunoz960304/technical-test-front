import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import { AuthProvider } from './context/AuthProvider';
import { TransactionsProvider } from './context/TransactionsProvider';
import AuthLayout from './layout/AuthLayout';
import ProtectedRoute from './layout/ProtectedRoute';
import Transactions from './pages/Transactions';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TransactionsProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>

            <Route path='/transactions' element={<ProtectedRoute />}>
              <Route index element={<Transactions />} />
            </Route>
          </Routes>
        </TransactionsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
