import * as React from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { DividerOrientationType, DividerVariantType, DividerSizeType } from 'types';
import { borderStyle } from './style';
import { theme } from 'styles';

interface Props extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientationType;
  variant?: DividerVariantType;
  size?: DividerSizeType;
  color?: string;
  css?: Interpolation<Theme>;
}

function Divider(props: Props, ref: React.Ref<HTMLHRElement>) {
  const { orientation = 'horizontal', variant = 'solid', size = 'thin', color = theme.color.gray.gray200, css } = props;

  return <hr {...props} ref={ref} css={[borderStyle(orientation, variant, size, color), css]} />;
}

const _Divider = React.forwardRef(Divider);
export { _Divider as Divider };
