import React, { PropsWithChildren } from 'react';
import Dialog from './Dialog';
import { titleStyle, subTitleStyle } from './style';
import { IAlertProps } from './types';

function Alert({ title, subTitle, children, ...props }: PropsWithChildren<IAlertProps>) {
  return (
    <Dialog {...props}>
      <p css={titleStyle}>{title}</p>
      <p css={subTitleStyle}>{subTitle}</p>
      {children}
    </Dialog>
  );
}

export default Alert;
