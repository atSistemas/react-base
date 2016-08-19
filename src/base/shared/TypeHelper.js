import fetchTypes from 'base/types/FetchTypes';
import ReactBaseError from './Errors';

export function typeBuilder(types) {
  const data = {};
  types.map(function(type) {
    data[type] = type;
  });
  return data;
}

export function generateFetchTypes(initialType) {
  if (!initialType) throw new ReactBaseError('Missing fetch type. You should add your request types in your action file!');
  const type = initialType.split('_')[0];
  const result = fetchTypes.reduce(function(acc, item) {
    acc.push(type + '_' + item);
    return acc;
  }, []);
  return result;
}
