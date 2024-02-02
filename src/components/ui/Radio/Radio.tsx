import React from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { wrap } from './style';

interface Props<T extends string> extends React.InputHTMLAttributes<HTMLInputElement> {
  handleClick?: (val: T) => void;
  current: T;
  css?: Interpolation<Theme>;
}

function Radio<T extends string>({
  handleClick,
  children,
  current,
  value,
  css = {},
  ...props
}: React.PropsWithChildren<Props<T>>) {
  return (
    <label css={wrap}>
      <input
        {...props}
        css={[css]}
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
      {children}
    </label>
  );
}

export default Radio;
