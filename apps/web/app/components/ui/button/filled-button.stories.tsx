import { Meta, StoryObj } from '@storybook/react';
import { FilledButton } from './filled-button';

const meta: Meta<typeof FilledButton> = {
  component: FilledButton,
};

export default meta;

type Story = StoryObj<typeof FilledButton>;

export const FilledButtonStory: Story = {
  render: () => (
    <div>
      <FilledButton>Click me</FilledButton>
    </div>
  ),
};
