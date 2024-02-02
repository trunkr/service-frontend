import React from 'react';
import { Outlet } from 'react-router-dom';
import { UiComponent } from 'components';

function Base() {
  return (
    <>
      <UiComponent.Header />
      <div css={{ marginTop: '60px' }}>
        <Outlet />
      </div>
    </>
  );
}

export default Base;
