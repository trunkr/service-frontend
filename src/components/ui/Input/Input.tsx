import React, { ClassAttributes, InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { wrap } from './style';
import { SizeType } from 'types';

interface Props extends InputHTMLAttributes<HTMLInputElement>, ClassAttributes<HTMLInputElement> {
  sizeType?: SizeType;
  invalidMsg?: string;
  css?: Interpolation<Theme>;
}

function Input(
  { invalidMsg = '', css = {}, sizeType = 'medium', ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <label css={wrap(invalidMsg !== '', sizeType)}>
      <input ref={ref} {...props} css={[css]} />
      <p>{invalidMsg}</p>
    </label>
  );
}

export default forwardRef(Input);
