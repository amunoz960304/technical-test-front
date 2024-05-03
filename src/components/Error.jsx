import React from 'react';

const Error = ({ message }) => {
  return (
    <p className='text-center my-10 bg-red-600 rounded-lg p-5 text-white'>
      {message}
    </p>
  );
};

export default Error;
