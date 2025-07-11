import { CSSObject, Theme } from '@emotion/react';
import theme from 'styles/theme';
import { ButtonColoryType, SizeType } from 'types';

const SIZE: Record<SizeType, Pick<CSSObject, 'fontSize' | 'padding' | 'minWidth' | 'borderRadius'>> = {
  large: {
    borderRadius: '60px',
    padding: '22px 0',
    minWidth: '608px',
    fontSize: theme.typography.size.label1,
  },
  medium: {
    borderRadius: '50px',
    padding: '18px 50px',
    fontSize: theme.typography.size.label2,
  },
  small: {
    borderRadius: '44px',
    padding: '12px 22px',
    fontSize: theme.typography.size.label4,
  },
};

const COLOR: Record<ButtonColoryType, CSSObject> = {
  primary: {
    background: theme.color.primary.mint600,
    border: `2px solid ${theme.color.primary.mint600}`,
    color: theme.color.gray.gray0,
    ':hover': {
      filter: 'brightness(0.95)',
    },
    ':disabled': {
      background: theme.color.primary.mint300,
      border: `2px solid ${theme.color.primary.mint300}`,
    },
  },
  line: {
    background: theme.color.gray.gray0,
    border: `2px solid ${theme.color.gray.gray1000}`,
    color: theme.color.gray.gray1000,
    ':hover': {
      filter: 'brightness(0.95)',
    },
    ':disabled': {
      background: theme.color.gray.gray0,
      border: `2px solid ${theme.color.gray.gray400}`,
      color: theme.color.gray.gray400,
    },
  },
  bk: {
    background: theme.color.gray.gray1000,
    border: `2px solid ${theme.color.gray.gray1000}`,
    color: theme.color.gray.gray0,
    ':disabled': {
      background: theme.color.gray.gray300,
      border: `2px solid ${theme.color.gray.gray300}`,
    },
  },
};

const buttonStyle =
  (size?: SizeType, color?: ButtonColoryType) =>
  ({
    typography: {
      weight: { bold },
    },
  }: Theme): CSSObject => {
    return {
      boxSizing: 'border-box',
      textAlign: 'center',
      fontWeight: bold,
      ...(size && SIZE[size]),
      ...(color && COLOR[color]),
    };
  };

export { buttonStyle };
