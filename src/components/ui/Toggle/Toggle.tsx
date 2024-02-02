import React, { PropsWithChildren, useReducer } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { toggle } from './style';
import icOn from 'static/icons/system/ic_toggle_on.svg';
import icOff from 'static/icons/system/ic_toggle_off.svg';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleCheck?: (checked: boolean) => void;
  css?: Interpolation<Theme>;
  readOnly?: boolean;
}

function CheckBox({
  children,
  checked,
  handleCheck,
  css = {
    width: '26px',
    height: '16px',
  },
  onChange,
  readOnly,
  ...props
}: PropsWithChildren<Props>) {
  const [isChecked, toggleCheck] = useReducer((c) => !c, checked || false);

  return (
    <label css={toggle}>
      <input
        {...props}
        css={css}
        type="checkbox"
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (readOnly) return;
          if (handleCheck) handleCheck(e.target.checked);
          else onChange?.(e);
          toggleCheck();
        }}
      />
      <img src={isChecked ? icOn : icOff} css={css} />
      {children}
    </label>
  );
}

export default CheckBox;
