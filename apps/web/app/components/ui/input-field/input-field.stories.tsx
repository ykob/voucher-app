import { Meta, StoryObj } from '@storybook/react';
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
    <div>
      <h1 className="story-heading">InputField Component</h1>
      <div className="story-flex">
        <InputField placeholder="place holder" />
      </div>
    </div>
  ),
};
