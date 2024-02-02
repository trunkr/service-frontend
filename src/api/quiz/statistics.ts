import { base } from 'api';
import { PATH_BASE } from './constants';

const PATH = `${PATH_BASE}/statistics-by-categories`;

const get = () => base.get(PATH);

const getByCategory = () => base.get(`${PATH}`);

export { get, getByCategory };
