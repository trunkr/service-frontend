import type { Meta, StoryObj } from '@storybook/react';

import LineButton from './LineButton';

const meta: Meta<typeof LineButton> = {
  title: 'LineButton',
  component: LineButton,
};

export default meta;
type Story = StoryObj<typeof LineButton>;

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
