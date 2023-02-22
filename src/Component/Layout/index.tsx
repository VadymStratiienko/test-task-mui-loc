import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import TopBar from '../TopBar';

const Layout = () => {
  const { pathname } = useLocation();
  return pathname === '/login' ? (
    <>
      <Outlet />
    </>
  ) : (
    <Box>
      <TopBar />
      <Container maxWidth='xl' sx={{ marginTop: '120px' }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
