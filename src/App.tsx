import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularProgress, CssBaseline } from '@mui/material';
import Layout from './Component/Layout';
import HomePage from './Page/HomePage';
import NewsPage from './Page/NewsPage';
import PrivateRoute from './utils/router/privateRouter';
import ProfilePage from './Page/ProfilePage';
import AuthComponent from './Page/Auth';
import { useStyles } from './Component/Home/styles';

function App() {
  const classes = useStyles();
  return (
    <Suspense
      fallback={
        <>
          <CircularProgress disableShrink className={classes.loadingStyle} />
        </>
      }
    >
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='news' element={<NewsPage />} />
          <Route element={<PrivateRoute />}>
            <Route path='profile' element={<ProfilePage />} />
          </Route>
          <Route path='login' element={<AuthComponent />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
