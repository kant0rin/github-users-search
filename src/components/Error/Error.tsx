import React from 'react';

interface OwnProps{
  error: string | null
}
const Error: React.FC<OwnProps> = ({error }) => {
  return (
    <div>
      {
        error && <p className='my-4 text-red-600 text-xl'>{error}</p>
      }
    </div>
  );
};

export default Error;
