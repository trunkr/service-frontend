import React, { PropsWithChildren } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { CheckBoxUiType, checkbox } from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  uiType: CheckBoxUiType;
  handleCheck?: (checked: boolean) => void;
  css?: Interpolation<Theme>;
  readOnly?: boolean;
}

function CheckBox({
  children,
  uiType,
  checked,
  handleCheck,
  css = {},
  onChange,
  readOnly,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <label css={checkbox(uiType)}>
      <input
        {...props}
        css={css}
        type="checkbox"
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (readOnly) return;

          if (handleCheck) handleCheck(e.target.checked);
          else onChange?.(e);
        }}
      />
      {children}
    </label>
  );
}

export default CheckBox;
