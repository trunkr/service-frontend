import type { Meta, StoryObj } from '@storybook/react';

import { LoginDialog } from './LoginDialog';

const meta: Meta<typeof LoginDialog> = {
  title: 'LoginDialog',
  component: LoginDialog,
};

export default meta;
type Story = StoryObj<typeof LoginDialog>;

export const Login: Story = {
  args: {},
};
