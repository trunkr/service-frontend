import React from 'react';
import Dialog from './Dialog';
import { titleStyle, subTitleStyle } from './style';
import { IAlertProps } from './types';

function Alert({ title, subTitle, ...props }: IAlertProps) {
  return (
    <Dialog {...props}>
      <p css={titleStyle}>{title}</p>
      <p css={subTitleStyle}>{subTitle}</p>
    </Dialog>
  );
}

export default Alert;
