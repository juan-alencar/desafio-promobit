import { MainPage } from '../interfaces';
import { Api } from '../providers';

const getAll = () =>
  Api.get<MainPage[]>(
    '/movie/popular?api_key=ed8e0aaa1f8f285e56d529cebd17c650'
  );

export const MovieService = {
  getAll,
};
