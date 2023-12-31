import type { Meta, StoryObj } from '@storybook/react';

import PrimaryBoxButton from './PrimaryBoxButton';

const meta: Meta<typeof PrimaryBoxButton> = {
  title: 'PrimaryBoxButton',
  component: PrimaryBoxButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryBoxButton>;

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
