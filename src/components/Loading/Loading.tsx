import React from 'react';
import {Circles} from "react-loader-spinner";

interface OwnProps {
  isLoading: boolean
}
const Loading: React.FC<OwnProps> = ({isLoading}) => {
  return (
    <div>
      {
        isLoading && <Circles
              height="80"
              width="80"
              color="white"
              ariaLabel="circles-loading"
              wrapperStyle={{'marginTop': '10px'}}
              wrapperClass=""
              visible={true}
          />
      }
    </div>
  );
};

export default Loading;
