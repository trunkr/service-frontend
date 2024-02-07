import React, { ClassAttributes, InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { wrap, invalidMsgStyle } from './style';
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
    <>
      <label css={wrap(invalidMsg !== '', sizeType)}>
        <input ref={ref} {...props} css={[css]} />
        {/* {!props.disabled && (
          <button
            type="button"
            onClick={(e) => {
              reset?.();
            }}
          >
            <img src={icCloseWhite} alt="" width={15} />
          </button>
        )} */}
      </label>
      <p css={invalidMsgStyle}>{invalidMsg}</p>
    </>
  );
}

export default forwardRef(Input);
