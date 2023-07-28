import React from 'react';

export const ERROR_TESTING_IDS = {
  TEXT: 'error-text'
}

interface OwnProps{
  error: string | null
}
const Error: React.FC<OwnProps> = ({error }) => {
  return (
    <div>
      {
        error && <p data-testid={ERROR_TESTING_IDS.TEXT} className='my-4 text-red-600 text-xl'>{error}</p>
      }
    </div>
  );
};

export default Error;
