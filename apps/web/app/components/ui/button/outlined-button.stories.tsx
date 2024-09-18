import { Meta, StoryObj } from '@storybook/react';
import { OutlinedButton } from './';

const meta: Meta<typeof OutlinedButton> = {
  title: 'UI/Button/OutlinedButton',
  component: OutlinedButton,
};

export default meta;

type Story = StoryObj<typeof OutlinedButton>;

export const OutlinedButtonStory: Story = {
  name: 'OutlinedButton',
  render: () => (
    <div>
      <h1 className="story-heading">OutlinedButton Component</h1>
      <h2 className="story-heading">Primary</h2>
      <div className="story-flex">
        <OutlinedButton buttonSize="sm">Button</OutlinedButton>
        <OutlinedButton buttonSize="md">Button</OutlinedButton>
        <OutlinedButton buttonSize="lg">Button</OutlinedButton>
      </div>
      <h2 className="story-heading">Secondary</h2>
      <div className="story-flex">
        <OutlinedButton buttonSize="sm" buttonColor="secondary">
          Button
        </OutlinedButton>
        <OutlinedButton buttonSize="md" buttonColor="secondary">
          Button
        </OutlinedButton>
        <OutlinedButton buttonSize="lg" buttonColor="secondary">
          Button
        </OutlinedButton>
      </div>
      <h2 className="story-heading">Success</h2>
      <div className="story-flex">
        <OutlinedButton buttonSize="sm" buttonColor="success">
          Button
        </OutlinedButton>
        <OutlinedButton buttonSize="md" buttonColor="success">
          Button
        </OutlinedButton>
        <OutlinedButton buttonSize="lg" buttonColor="success">
          Button
        </OutlinedButton>
      </div>
      <h2 className="story-heading">Warning</h2>
      <div className="story-flex">
        <OutlinedButton buttonSize="sm" buttonColor="warning">
          Button
        </OutlinedButton>
        <OutlinedButton buttonSize="md" buttonColor="warning">
          Button
        </OutlinedButton>
        <OutlinedButton buttonSize="lg" buttonColor="warning">
          Button
        </OutlinedButton>
      </div>
      <h2 className="story-heading">Danger</h2>
      <div className="story-flex">
        <OutlinedButton buttonSize="sm" buttonColor="danger">
          Button
        </OutlinedButton>
        <OutlinedButton buttonSize="md" buttonColor="danger">
          Button
        </OutlinedButton>
        <OutlinedButton buttonSize="lg" buttonColor="danger">
          Button
        </OutlinedButton>
      </div>
    </div>
  ),
};
