import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const ToastMessage: Story = {
  args: {
    label: '풀 수 있는 문제가 없습니다. 다른 카테고리를 선택해주세요.',
  },
};
