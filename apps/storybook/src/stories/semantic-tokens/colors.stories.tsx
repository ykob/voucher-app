import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { colors } from '../../../../web/pandacss/theme/semantic-tokens/colors';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';
import { type Token, token } from '../../../styled-system/tokens';

const meta: Meta = {
  title: 'Primary/Semantic Tokens/Colors',
};

export default meta;

const ColorBlock = ({ children, ...props }: ComponentProps<'div'>) => (
  <div
    className={css({
      width: '200px',
      height: '60px',
      boxSizing: 'border-box',
      px: 2,
    })}
    {...props}
  >
    <div
      className={css({
        color: 'white',
        mixBlendMode: 'difference',
      })}
    >
      {children}
    </div>
  </div>
);

export const HeadingTextStyleStory: StoryObj = {
  name: 'Colors',
  render: () => (
    <div className={flex({ direction: 'column', gap: 4 })}>
      <h1 className={css({ textStyle: 'heading.primary' })}>Color Tokens</h1>
      {Object.entries(colors).map(([key1, value1]) => (
        <div key={key1} className={flex({ direction: 'column', gap: 4 })}>
          <h2 className={css({ textStyle: 'heading.secondary' })}>{key1}</h2>
          <div className={flex({ gap: 1 })}>
            {Object.entries(value1).map(([key2, value2]) => {
              if (value2.value) {
                const colorToken = `colors.${key1}.${key2}` as Token;

                return (
                  <ColorBlock
                    key={`${key1}.${key2}`}
                    style={{
                      backgroundColor: token.var(colorToken),
                    }}
                  >
                    {key1}.{key2}
                  </ColorBlock>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  ),
};
