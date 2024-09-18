import { Meta, StoryObj } from '@storybook/react';
import { FilledButton } from './';

const meta: Meta<typeof FilledButton> = {
  title: 'UI/Button/FilledButton',
  component: FilledButton,
};

export default meta;

type Story = StoryObj<typeof FilledButton>;

export const FilledButtonStory: Story = {
  name: 'FilledButton',
  render: () => (
    <div>
      <h1 className="story-heading">FilledButton Component</h1>
      <h2 className="story-heading">Primary</h2>
      <div className="story-flex">
        <FilledButton buttonSize="sm">Button</FilledButton>
        <FilledButton buttonSize="md">Button</FilledButton>
        <FilledButton buttonSize="lg">Button</FilledButton>
      </div>
      <h2 className="story-heading">Secondary</h2>
      <div className="story-flex">
        <FilledButton buttonSize="sm" buttonColor="secondary">
          Button
        </FilledButton>
        <FilledButton buttonSize="md" buttonColor="secondary">
          Button
        </FilledButton>
        <FilledButton buttonSize="lg" buttonColor="secondary">
          Button
        </FilledButton>
      </div>
      <h2 className="story-heading">Success</h2>
      <div className="story-flex">
        <FilledButton buttonSize="sm" buttonColor="success">
          Button
        </FilledButton>
        <FilledButton buttonSize="md" buttonColor="success">
          Button
        </FilledButton>
        <FilledButton buttonSize="lg" buttonColor="success">
          Button
        </FilledButton>
      </div>
      <h2 className="story-heading">Warning</h2>
      <div className="story-flex">
        <FilledButton buttonSize="sm" buttonColor="warning">
          Button
        </FilledButton>
        <FilledButton buttonSize="md" buttonColor="warning">
          Button
        </FilledButton>
        <FilledButton buttonSize="lg" buttonColor="warning">
          Button
        </FilledButton>
      </div>
      <h2 className="story-heading">Danger</h2>
      <div className="story-flex">
        <FilledButton buttonSize="sm" buttonColor="danger">
          Button
        </FilledButton>
        <FilledButton buttonSize="md" buttonColor="danger">
          Button
        </FilledButton>
        <FilledButton buttonSize="lg" buttonColor="danger">
          Button
        </FilledButton>
      </div>
    </div>
  ),
};
