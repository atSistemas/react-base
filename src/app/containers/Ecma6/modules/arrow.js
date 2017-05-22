
//single param
const  double = num => num * 2;

//double param
const  divide = (num, num2) => num / num2;

//more complex examples
const isEven = (num, num2) => {
  const result = divide(num, num2);
  return (result % 2 === 0) ? 'yes!': 'no!';
};

export { double, divide, isEven };