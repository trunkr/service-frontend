import { base } from 'api';
import { AnswerFavorParams } from 'types';

const postFavor = (data: AnswerFavorParams) => base.put('v1/favors', data);

export { postFavor };
