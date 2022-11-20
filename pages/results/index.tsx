import { GetServerSideProps } from 'next';
import MovieCard from '../../components/cards/movie/MovieCard';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { ISearchData } from '../../lib/search/types';
import { IApiSearchResponseData } from '../api/search';
import { NextPageWithLayout } from '../page';

export interface IResults {
  searchResults: ISearchData[];
}

export const getServerSideProps: GetServerSideProps<IResults> = async ({
  query,
}) => {
  let searchResults: IApiSearchResponseData = [];
  const searchTerm = query.search;

  if (searchTerm && searchTerm.length > 0) {
    const response = await fetch(`http://localhost:3000/api/search`, {
      body: JSON.stringify({ searchTerm }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    searchResults = await response.json();
  }

  return {
    props: {
      searchResults,
    },
  };
};

const Results: NextPageWithLayout<IResults> = ({ searchResults }) => {
  const hasResults = searchResults.length > 0;

  return (
    <section>
      {hasResults ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {searchResults.map((result, idex) => (
            <MovieCard key={idex} {...result} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
