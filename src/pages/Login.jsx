import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('muca960403@hotmail.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState({});

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([password.trim(), email.trim()].includes('')) {
      setError({
        message: 'Todos los campos son obligatorios',
      });
      return;
    }

    setError({});
    login(email, password);
  };

  return (
    <div>
      <h2 className='text-center uppercase text-gray-600 block text-4xl font-bold'>
        Iniciar sesión
      </h2>
      {error.message && <p>{error.message}</p>}
      <form
        className='my-10 bg-white shadow rounded-lg p-10'
        onSubmit={handleSubmit}
      >
        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email de Registro'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='Password de Registro'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input
          type='submit'
          value='Iniciar Sesión'
          className='bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
        />
      </form>
    </div>
  );
};

export default Login;
