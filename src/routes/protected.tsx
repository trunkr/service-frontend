import React from 'react';
import { Signup } from 'pages';
import { RouteObject } from 'react-router-dom';
import { LayoutComponent } from 'components';
import { PATH } from 'data/path';

const protectedApp: RouteObject = {
  element: <LayoutComponent.Protected />,
  children: [
    {
      children: [
        {
          path: PATH.signup,
          element: <Signup />,
        },
      ],
    },
  ],
};

export { protectedApp };
