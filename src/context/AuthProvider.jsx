import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import clientAxios from '../config/clientAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    navigate('/transactions');
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {
        data: { token },
      } = await clientAxios.post('/auth/login', { email, password }, config);
      localStorage.setItem('token', token);
      navigate('/transactions');
    } catch (error) {
      alert('Usuario o Password incorrectos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
