export default function(types){
  const data = {};
  types.map(function(type){
    data[type] = type;
  })
  return data;
}
