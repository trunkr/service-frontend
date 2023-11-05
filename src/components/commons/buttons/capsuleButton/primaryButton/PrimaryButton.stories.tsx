import type { Meta, StoryObj } from '@storybook/react';

import PrimaryButton from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'PrimaryButton',
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

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
