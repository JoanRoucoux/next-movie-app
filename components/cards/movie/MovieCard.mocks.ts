import { IMovieCard } from './MovieCard';

const base: IMovieCard = {
  tag: 'Action/Aventure',
  title: `Black Panther: Wakanda Forever`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'Joan',
  time: '2h ago',
};

export const mockMovieCardProps = {
  base,
};
