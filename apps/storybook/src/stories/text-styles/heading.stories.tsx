import { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';

const meta: Meta = {
  title: 'Primary/Text Styles/Heading',
};

export default meta;

export const HeadingTextStyleStory: StoryObj = {
  name: 'Heading',
  render: () => (
    <div className={flex({ direction: 'column', gap: 4 })}>
      <h1 className={css({ textStyle: 'heading.primary' })}>
        Heading Text Styles
      </h1>
      <h2 className={css({ textStyle: 'heading.primary' })}>Heading Primary</h2>
      <p>
        In a small town, nestled between rolling hills and vibrant fields, there
        lived a curious cat named Whiskers. Whiskers was no ordinary cat; he had
        an adventurous spirit and a keen sense of exploration. Every morning, he
        would stretch his paws and set off on a new journey, discovering hidden
        paths and secret gardens. The townsfolk adored him, often leaving out
        little treats for his return.
      </p>
      <h2 className={css({ textStyle: 'heading.secondary' })}>
        Heading Secondary
      </h2>
      <p>
        One sunny afternoon, Whiskers stumbled upon an old, forgotten well at
        the edge of the woods. Intrigued, he peered inside and noticed a faint
        glow emanating from the depths. Without hesitation, he decided to
        investigate further. As he climbed down cautiously, he found himself in
        a magical underground world filled with sparkling crystals and whimsical
        creatures. The inhabitants welcomed him warmly, and together they shared
        stories and adventures.
      </p>
      <h2 className={css({ textStyle: 'heading.tertiary' })}>
        Heading Tertiary
      </h2>
      <p>
        Whiskers realized that every day held the potential for new discoveries.
        He returned to the surface with a heart full of joy and stories to tell,
        knowing that his explorations had only just begun.
      </p>
    </div>
  ),
};
