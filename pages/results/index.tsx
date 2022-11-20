import MovieCard from '../../components/cards/movie/MovieCard';
import { mockMovieCardProps } from '../../components/cards/movie/MovieCard.mocks';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Results: NextPageWithLayout = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...new Array(6)].map((_, idex) => (
          <MovieCard key={idex} {...mockMovieCardProps.base} />
        ))}
      </div>
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
