import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Layout from './Component/Layout';
import HomePage from './Page/HomePage';
import NewsPage from './Page/NewsPage';
import PrivateRoute from './utils/router/privateRouter';
import ProfilePage from './Page/ProfilePage';
import AuthComponent from './Page/Auth';
import LoadingProgress from './Component/Loading-Progress';

function App() {
  return (
    <Suspense fallback={<LoadingProgress />}>
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
