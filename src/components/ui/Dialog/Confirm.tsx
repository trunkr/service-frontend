import React from 'react';
import Dialog from './Dialog';
import { ConfirmProps } from './types';

function Confirm({ title, subTitle, ...props }: ConfirmProps) {
  return (
    <Dialog {...props}>
      <p>{title}</p>
      <p>{subTitle}</p>
    </Dialog>
  );
}

export default Confirm;
