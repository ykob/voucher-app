import { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../styled-system/css';

const meta: Meta = {
  title: 'Primary/Text Styles/Body',
};

export default meta;

export const BodyTextStyleStory: StoryObj = {
  name: 'Body',
  render: () => (
    <div>
      <div className="story-flex-column">
        <h1 className={css({ textStyle: 'heading.primary' })}>
          Body Text Styles
        </h1>
        <h2 className={css({ textStyle: 'heading.secondary' })}>
          Body Primary
        </h2>
        <p className={css({ textStyle: 'body.primary' })}>
          In a small town, nestled between rolling hills and vibrant fields,
          there lived a curious cat named Whiskers. Whiskers was no ordinary
          cat; he had an adventurous spirit and a keen sense of exploration.
          Every morning, he would stretch his paws and set off on a new journey,
          discovering hidden paths and secret gardens. The townsfolk adored him,
          often leaving out little treats for his return.
        </p>
        <h2 className={css({ textStyle: 'heading.secondary' })}>
          Body Secondary
        </h2>
        <p className={css({ textStyle: 'body.secondary' })}>
          One sunny afternoon, Whiskers stumbled upon an old, forgotten well at
          the edge of the woods. Intrigued, he peered inside and noticed a faint
          glow emanating from the depths. Without hesitation, he decided to
          investigate further. As he climbed down cautiously, he found himself
          in a magical underground world filled with sparkling crystals and
          whimsical creatures. The inhabitants welcomed him warmly, and together
          they shared stories and adventures.
        </p>
        <h2 className={css({ textStyle: 'heading.secondary' })}>
          Body Tertiary
        </h2>
        <p className={css({ textStyle: 'body.tertiary' })}>
          Whiskers realized that every day held the potential for new
          discoveries. He returned to the surface with a heart full of joy and
          stories to tell, knowing that his explorations had only just begun.
        </p>
      </div>
    </div>
  ),
};
