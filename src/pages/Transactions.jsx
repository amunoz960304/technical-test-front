import { useState } from 'react';

import RadioButtons from '../components/RadioButtons';
import GroupAmountGraphic from '../components/GroupAmountGraphic';
import TotalsAccountGraphic from '../components/TotalsAccountGraphic';
import useTransactions from '../hooks/useTransactions';
import AnalyzeFinanceGraphic from '../components/AnalyzeFinanceGraphic';

const Transactions = () => {
  const [linkId, setLinkId] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [groupAmounts, setGroupAmounts] = useState([]);
  const [totalsAccount, setTotalsAccount] = useState([]);
  const [analyzeFinances, setAnalyzeFinances] = useState({});

  const {
    fetchGroupAmounts,
    fetchTotalsAccount,
    fetchAnalyzeFinances,
    error,
    setError,
  } = useTransactions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setGroupAmounts([]);
    setTotalsAccount([]);
    setAnalyzeFinances({});
    setError({});

    if ([linkId, selectedOption].includes('')) {
      setError({
        message: 'Todos los campos son obligatorios.',
      });
      return;
    }

    if (selectedOption === 'group-amounts') {
      const data = await fetchGroupAmounts(linkId);
      setGroupAmounts(data ?? []);
    }

    if (selectedOption === 'analyze-finances') {
      const data = await fetchAnalyzeFinances(linkId);
      setAnalyzeFinances(data ?? {});
    }

    if (selectedOption === 'totals-accounts') {
      const data = await fetchTotalsAccount(linkId);
      setTotalsAccount(data ?? []);
    }
  };
  return (
    <>
      <h1 className='text-center uppercase text-gray-600 block text-4xl font-bold'>
        Grafica tus finanzas
      </h1>
      {error.message && (
        <p className='text-center my-10 bg-red-600 rounded-lg p-5 text-white'>
          {error.message}
        </p>
      )}
      <form
        className='my-10 bg-white shadow rounded-lg p-10'
        onSubmit={handleSubmit}
      >
        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='link-id'
          >
            Id del enlace
          </label>
          <input
            id='link-id'
            type='text'
            placeholder='Ingresa el id de tu enlace'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={linkId}
            onChange={(e) => setLinkId(e.target.value)}
          />
        </div>

        <RadioButtons
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        <input
          type='submit'
          value='Realizar Operacion'
          className='bg-sky-700 mb-5 mt-10 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
        />
      </form>

      {groupAmounts.length > 0 ? (
        <GroupAmountGraphic data={groupAmounts} />
      ) : (
        ''
      )}

      {totalsAccount.length > 0 ? (
        <TotalsAccountGraphic data={totalsAccount} />
      ) : (
        ''
      )}

      {analyzeFinances.balance ? (
        <AnalyzeFinanceGraphic data={analyzeFinances} />
      ) : (
        ''
      )}
    </>
  );
};

export default Transactions;
