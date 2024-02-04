import * as React from 'react';
import { useTheme } from '@emotion/react';
import { DividerProps } from './types';

function Divider(props: DividerProps, ref: React.Ref<HTMLHRElement>) {
  const { color, variant = 'solid', size = 1, orientation = 'horizontal' } = props;

  const theme = useTheme();

  const borderStyle =
    orientation === 'horizontal'
      ? {
          width: '100%',
          borderWidth: `0 0 ${size}px 0`,
        }
      : {
          height: '100%',
          borderWidth: `0 0 0 ${size}px`,
        };

  return (
    <hr
      {...props}
      ref={ref}
      style={{
        borderStyle: variant,
        borderColor: color ?? theme.color.gray['gray100'],
        ...borderStyle,
        ...props.style,
      }}
    />
  );
}

const _Divider = React.forwardRef(Divider);
export { _Divider as Divider };
