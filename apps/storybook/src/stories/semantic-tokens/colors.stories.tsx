import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { css, cx } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';

const meta: Meta = {
  title: 'Primary/Semantic Tokens/Colors',
};

export default meta;

const ColorBlock = ({ children, className }: ComponentProps<'div'>) => (
  <div
    className={cx(
      css({
        width: '200px',
        height: '60px',
        boxSizing: 'border-box',
        px: 2,
      }),
      className,
    )}
  >
    {children}
  </div>
);

export const HeadingTextStyleStory: StoryObj = {
  name: 'Colors',
  render: () => (
    <div className={flex({ direction: 'column', gap: 4 })}>
      <h1 className={css({ textStyle: 'heading.primary' })}>Color Tokens</h1>
      <div className={flex({ direction: 'column', gap: 4 })}>
        <h2 className={css({ textStyle: 'heading.secondary' })}>Text Colors</h2>
        <div className={flex({ gap: 1 })}>
          <ColorBlock className={css({ bgColor: 'text.body' })}>
            text.body
          </ColorBlock>
          <ColorBlock className={css({ bgColor: 'text.subtle' })}>
            text.subtle
          </ColorBlock>
        </div>
      </div>
    </div>
  ),
};
