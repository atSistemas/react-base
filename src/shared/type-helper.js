import fetchTypes from '../types/fetch-types'

export function typeBuilder(types){
  const data = {};
  types.map(function(type){
    data[type] = type;
  })
  return data;
}

export function generetaFetchTypes(initialType){
  const type = initialType.split('_')[0];
  const result = fetchTypes.reduce(function(acc, item){
    acc.push(type + '_' + item)
    return acc
  }, [])
  return result
}
