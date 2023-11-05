import type { Meta, StoryObj } from '@storybook/react';

import TextBox from './TextBox';

const meta: Meta<typeof TextBox> = {
  title: 'TextBox',
  component: TextBox,
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Active: Story = {
  args: {
    focus: 'FOCUS',
    txt: 'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다. 오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
  },
};

export const InActive: Story = {
  args: {
    focus: 'NON_FOCUS',
    txt: 'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다. 오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
  },
};
