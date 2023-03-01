import React from 'react';
import { CircularProgress } from '@mui/material';

const LoadingProgress = () => {
  return (
    <>
      <CircularProgress
        disableShrink
        sx={{
          position: 'fixed',
          left: '50%',
          top: '50%',
        }}
      />
    </>
  );
};

export default LoadingProgress;
