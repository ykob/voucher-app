import { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
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
    <div className={flex({ direction: 'column', gap: 4 })}>
      <h1 className={css({ textStyle: 'heading.primary' })}>
        OutlinedButton Component
      </h1>
      <h2 className={css({ textStyle: 'heading.secondary' })}>Primary</h2>
      <div className={flex({ gap: 2 })}>
        <OutlinedButton buttonSize="sm">Button</OutlinedButton>
        <OutlinedButton buttonSize="md">Button</OutlinedButton>
        <OutlinedButton buttonSize="lg">Button</OutlinedButton>
      </div>
      <h2 className={css({ textStyle: 'heading.secondary' })}>Secondary</h2>
      <div className={flex({ gap: 2 })}>
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
      <h2 className={css({ textStyle: 'heading.secondary' })}>Success</h2>
      <div className={flex({ gap: 2 })}>
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
      <h2 className={css({ textStyle: 'heading.secondary' })}>Warning</h2>
      <div className={flex({ gap: 2 })}>
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
      <h2 className={css({ textStyle: 'heading.secondary' })}>Danger</h2>
      <div className={flex({ gap: 2 })}>
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
