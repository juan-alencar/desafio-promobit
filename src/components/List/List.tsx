import { ListMovie, ListMovieProps } from './ListMovie';

type MovieProps = {
  items: ListMovieProps[];
};

export const List: React.FC<MovieProps> = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item, index) => (
        <ListMovie key={index} {...item} />
      ))}
    </div>
  );
};
