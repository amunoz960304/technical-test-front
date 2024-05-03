const RadioButtons = ({ selectedOption, setSelectedOption }) => {
  const options = [
    { value: 'analyze-finances', label: 'Realizar analisis financiero' },
    {
      value: 'totals-accounts',
      label: 'Agrupar ingresos y egresos por cuenta',
    },
    {
      value: 'group-amounts',
      label: 'Agrupar totales por categoria',
    },
  ];

  return (
    <fieldset className='flex justify-between flex-wrap'>
      <legend className='uppercase text-gray-600 block text-xl font-bold mb-5'>
        Selecciona una operacion
      </legend>

      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              className='mx-2'
              type='radio'
              value={option.value}
              checked={selectedOption === option.value}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioButtons;
