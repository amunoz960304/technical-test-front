import { useContext } from 'react';
import TransactionsContext from '../context/TransactionsProvider';

const useTransactions = () => {
  return useContext(TransactionsContext);
};

export default useTransactions;
