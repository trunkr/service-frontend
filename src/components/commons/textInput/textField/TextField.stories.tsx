import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';
import { COLORS } from '@public/assets/colors/color';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Small: Story = {
  args: {
    textSize: 'SMALL',
    error: 'NON_ERROR',
    focus: 'NON_FOCUS',
    txt: '바질치즈베이글',
    backgroundColor: COLORS.gray.white,
  },
};
export const Medium: Story = {
  args: {
    textSize: 'MEDIUM',
    error: 'NON_ERROR',
    focus: 'NON_FOCUS',
    txt: '바질치즈베이글',
    backgroundColor: COLORS.gray.white,
  },
};
export const Error: Story = {
  args: {
    textSize: 'MEDIUM',
    error: 'ERROR',
    focus: 'NON_FOCUS',
    txt: '바질치즈베이글',
    backgroundColor: COLORS.gray.white,
  },
};

export const Focus: Story = {
  args: {
    textSize: 'MEDIUM',
    error: 'NON_ERROR',
    focus: 'FOCUS',
    txt: '바질치즈베이글',
    backgroundColor: COLORS.gray.white,
  },
};

export const Complete: Story = {
  args: {
    textSize: 'MEDIUM',
    error: 'NON_ERROR',
    focus: 'NON_FOCUS',
    txt: '바질치즈베이글',
    backgroundColor: COLORS.gray.gray250,
  },
};
