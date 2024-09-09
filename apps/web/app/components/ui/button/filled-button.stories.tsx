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
      <h1 className="story-heading">FilledButton Component</h1>
      <div className="flex">
        <FilledButton buttonSize="sm">Button</FilledButton>
        <FilledButton buttonSize="md">Button</FilledButton>
        <FilledButton buttonSize="lg">Button</FilledButton>
      </div>
    </div>
  ),
};
