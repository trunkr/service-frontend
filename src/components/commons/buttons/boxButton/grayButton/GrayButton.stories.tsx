import type { Meta, StoryObj } from '@storybook/react';

import GrayButton from './GrayButton';

const meta: Meta<typeof GrayButton> = {
  title: 'GrayButton',
  component: GrayButton,
};

export default meta;
type Story = StoryObj<typeof GrayButton>;

export const Default: Story = {
  args: {
    size: 'SMALL',
    msg: 'DEFAULT',
    state: 'DEFAULT',
  },
};
export const Pressed: Story = {
  args: {
    size: 'SMALL',
    msg: 'PRESSED',
    state: 'PRESSED',
  },
};
export const Disabled: Story = {
  args: {
    size: 'SMALL',
    msg: 'DISABLED',
    state: 'DISABLED',
  },
};
