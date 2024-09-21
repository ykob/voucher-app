import { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../styled-system/css';

const meta: Meta = {
  title: 'Primary/Text Styles/Heading',
};

export default meta;

export const FilledButtonStory: StoryObj = {
  name: 'Heading',
  render: () => (
    <div>
      <h1 className="story-heading">Heading Text Styles</h1>
      <h1 className={css({ textStyle: 'heading.lg' })}>Heading Large</h1>
      <h1 className={css({ textStyle: 'heading.md' })}>Heading Medium</h1>
      <h2 className={css({ textStyle: 'heading.sm' })}>Heading Small</h2>
    </div>
  ),
};
