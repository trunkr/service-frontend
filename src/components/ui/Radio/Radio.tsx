import React from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { wrap } from './style';
import icOn from 'static/icons/system/ic_radio_on.svg';
import icOff from 'static/icons/system/ic_radio_off.svg';

interface Props<T extends string> extends React.InputHTMLAttributes<HTMLInputElement> {
  handleClick?: (val: T) => void;
  current: T;
  sizeCss?: Interpolation<Theme>;
}

function Radio<T extends string>({
  handleClick,
  children,
  current,
  value,
  sizeCss = {},
  ...props
}: React.PropsWithChildren<Props<T>>) {
  return (
    <label css={wrap}>
      <input
        {...props}
        type="radio"
        value={value}
        checked={current === value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target;
          if (props?.readOnly) return;
          handleClick?.(value as T);
        }}
        disabled={props?.readOnly && current !== value}
      />
      <img src={current === value ? icOn : icOff} css={sizeCss} />
      {children}
    </label>
  );
}

export default Radio;
