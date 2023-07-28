import React from 'react';
import {Circles} from "react-loader-spinner";

interface OwnProps {
  isLoading: boolean
}

export const LOADING_TESTING_IDS = {
  CONTAINER: 'loader-container'
}
const Loading: React.FC<OwnProps> = ({isLoading}) => {
  return (
    <div>
      {
        isLoading && <div data-testid={LOADING_TESTING_IDS.CONTAINER}><Circles
              height="80"
              width="80"
              color="white"
              ariaLabel="circles-loading"
              wrapperStyle={{'marginTop': '10px'}}
              wrapperClass=""
              visible={true}
          /></div>
      }
    </div>
  );
};

export default Loading;
