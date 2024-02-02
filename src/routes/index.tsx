import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LayoutComponent } from 'components';
import { unauthorizedApp } from './unauthorized';
import { privateApp } from './private';
import { protectedApp } from './protected';

const router = createBrowserRouter([
  {
    element: <LayoutComponent.Base />,
    children: [unauthorizedApp, protectedApp, privateApp],
  },
]);

export default router;
