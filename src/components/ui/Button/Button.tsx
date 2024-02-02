import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { SizeType, ButtonColoryType } from 'types';
import { buttonStyle } from './style';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  size?: SizeType;
  color?: ButtonColoryType;
  css?: Interpolation<Theme>;
}

function Button({ size, children, type, color, css, ...rest }: Props) {
  return (
    <button type={type ?? 'button'} {...rest} css={[buttonStyle(size, color), css]}>
      {children}
    </button>
  );
}

export default Button;
