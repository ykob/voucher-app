import { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { InputField } from './';

const meta: Meta<typeof InputField> = {
  title: 'UI/Form Elements/InputField',
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const OutlinedButtonStory: Story = {
  name: 'InputField',
  render: () => (
    <div className={flex({ direction: 'column', gap: 4 })}>
      <h1 className={css({ textStyle: 'heading.primary' })}>
        InputField Component
      </h1>
      <div>
        <InputField placeholder="place holder" />
      </div>
    </div>
  ),
};
