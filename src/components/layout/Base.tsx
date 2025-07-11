import React from 'react';
import { Outlet } from 'react-router-dom';
import { UiComponent } from 'components';
import { useAppDispatch, useAppSelector } from 'stores';
import { closeAlert } from 'stores/ui';

function Base() {
  const { isOpenAlert, alertContent, alertTitle, loading } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <>
      <UiComponent.Header />
      <div css={{ marginTop: '60px' }}>
        <Outlet />
      </div>
      {isOpenAlert && (
        <UiComponent.Alert title={alertTitle} handleClose={() => dispatch(closeAlert())}>
          {alertContent}
        </UiComponent.Alert>
      )}
      {loading && <UiComponent.Loading />}
    </>
  );
}

export default Base;
