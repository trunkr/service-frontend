import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from 'stores';

function Private() {
  const { auth } = useAppSelector((state) => state.auth);
  if (auth?.token.accessToken) {
    return <Outlet />;
  }

  return <Navigate to={'/'} />;
}

export default Private;
