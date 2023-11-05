import type { Meta, StoryObj } from '@storybook/react';

import BKButton from './BKButton';

const meta: Meta<typeof BKButton> = {
  title: 'BKButton',
  component: BKButton,
};

export default meta;
type Story = StoryObj<typeof BKButton>;

export const Default: Story = {
  args: {
    size: 'SMALL',
    msg: 'DEFAULT',
    state: 'DEFAULT',
  },
};

export const Disabled: Story = {
  args: {
    size: 'SMALL',
    msg: 'DISABLED',
    state: 'DISABLED',
  },
};
