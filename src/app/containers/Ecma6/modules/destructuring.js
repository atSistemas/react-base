//Destructurating and object
const obj = { name: 'Peter', surname: 'Weller', age: 33, birthdate: '22-10-1999' }; 

//DESTRUCTURING PARAMS
const arrowFunction = ({ name, surname }) => {
  return `hi ${name} ${surname}`;
};

export const destructured = arrowFunction(obj);

//SAME AS
const arrowFunction2 = props => {
  return `hi ${props.name} ${props.surname}`;
};

export const destructured2 = arrowFunction2(obj);
