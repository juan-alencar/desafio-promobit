import { useCallback, useState } from 'react';
import { MainPage } from '../interfaces';
import { MovieService } from '../services/MovieServices';

export const useTodo = () => {
  const [movies, setMovies] = useState<MainPage[]>([]);

  const getAll = useCallback(async () => {
    const { status, data } = await MovieService.getAll();

    if (status !== 200) throw new Error();

    setMovies(data);
  }, []);

  return {
    movies,
    getAll,
  };
};
