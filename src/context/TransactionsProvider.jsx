import { createContext, useState } from 'react';
import clientAxios from '../config/clientAxios';
import { useNavigate } from 'react-router-dom';

const TransactionsContext = createContext();

const TransactionsProvider = ({ children }) => {
  const navigate = useNavigate();

  const [error, setError] = useState({});

  const getToken = () => localStorage.getItem('token');
  const deleteToken = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const getConfig = () => {
    return {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
    };
  };

  const fetchGroupAmounts = async (linkId) => {
    try {
      const { data } = await clientAxios(
        `/transactions/group-amounts/${linkId}`,
        getConfig()
      );

      return data;
    } catch (error) {
      if (error?.response?.status === 401) {
        deleteToken();
        return;
      }
      setError({
        message: `No se encontro informacion con el linkId ${linkId}`,
      });
    }
  };

  const fetchAnalyzeFinances = async (linkId) => {
    try {
      const { data } = await clientAxios(
        `/transactions/analyze-finances/${linkId}`,
        getConfig()
      );

      return data;
    } catch (error) {
      if (error?.response?.status === 401) {
        deleteToken();
        return;
      }

      setError({
        message: `No se encontro informacion con el linkId ${linkId}`,
      });
    }
  };

  const fetchTotalsAccount = async (linkId) => {
    try {
      const { data } = await clientAxios(
        `/transactions/totals-account/${linkId}`,
        getConfig()
      );

      return data;
    } catch (error) {
      if (error?.response?.status === 401) {
        deleteToken();
        return;
      }
      setError({
        message: `No se encontro informacion con el linkId ${linkId}`,
      });
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        fetchGroupAmounts,
        fetchAnalyzeFinances,
        fetchTotalsAccount,
        error,
        setError,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
export { TransactionsProvider };

export default TransactionsContext;
