
const ages = [16, 15, 12, 19, 20];

const acumulated = ages.reduce((acc, key) => {
  return acc + key;
});

const averageAges = acumulated / ages.length;
export default averageAges;