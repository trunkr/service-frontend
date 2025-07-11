import React, { PropsWithChildren } from 'react';
import Dialog from './Dialog';
import { ConfirmProps } from './types';
import { titleStyle, subTitleStyle } from './style';

function Confirm({ title, subTitle, children, ...props }: PropsWithChildren<ConfirmProps>) {
  return (
    <Dialog {...props}>
      <p css={titleStyle}>{title}</p>
      <p css={subTitleStyle}>{subTitle}</p>
      {children}
    </Dialog>
  );
}

export default Confirm;
