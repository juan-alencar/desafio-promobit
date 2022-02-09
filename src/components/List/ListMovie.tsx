import { Result } from '../../interfaces';

export type ListMovieProps = {
  page: number;
  results: Result[];
  total_results: number;
  total_pages: number;
};

export const ListMovie: React.FC<ListMovieProps> = ({
  page,
  results,
  total_results,
  total_pages,
}) => {
  return (
    <div>
      <h1>{page}</h1>
    </div>
  );
};
