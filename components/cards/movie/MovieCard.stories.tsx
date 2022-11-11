import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieCard, { IMovieCard } from './MovieCard';
import { mockMovieCardProps } from './MovieCard.mocks';

export default {
  title: 'cards/MovieCard',
  component: MovieCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMovieCardProps.base,
} as IMovieCard;
