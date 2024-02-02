import React from 'react';
import { Home } from 'pages';
import { RouteObject } from 'react-router-dom';

const unauthorizedApp: RouteObject = {
  children: [
    {
      path: '/',
      element: <Home />,
    },
  ],
};

export { unauthorizedApp };
