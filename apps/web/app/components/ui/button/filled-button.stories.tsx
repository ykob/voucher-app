import { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
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
    <div className={flex({ direction: 'column', gap: 4 })}>
      <h1 className={css({ textStyle: 'heading.primary' })}>
        FilledButton Component
      </h1>
      <h2 className={css({ textStyle: 'heading.secondary' })}>Primary</h2>
      <div className={flex({ gap: 4 })}>
        <FilledButton buttonSize="sm">Button</FilledButton>
        <FilledButton buttonSize="md">Button</FilledButton>
        <FilledButton buttonSize="lg">Button</FilledButton>
      </div>
      <h2 className={css({ textStyle: 'heading.secondary' })}>Secondary</h2>
      <div className={flex({ gap: 2 })}>
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
      <h2 className={css({ textStyle: 'heading.secondary' })}>Success</h2>
      <div className={flex({ gap: 2 })}>
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
      <h2 className={css({ textStyle: 'heading.secondary' })}>Warning</h2>
      <div className={flex({ gap: 2 })}>
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
      <h2 className={css({ textStyle: 'heading.secondary' })}>Danger</h2>
      <div className={flex({ gap: 2 })}>
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
