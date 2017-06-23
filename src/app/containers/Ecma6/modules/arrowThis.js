//REGULAR FUNCTION
function RegularFunction() {
  this.foo = 'accesing pseudo this';
  const self = this;
  return function( ) {
    console.log(1111,this);
    return self.foo;
  };
}

const regularFunction = new RegularFunction();

//ARROW FUNCTION
function ArrowFunction() {
  this.foo = 'accesing parent this';
  const arrowFunction = () => {
    return this.foo;
  };
  return arrowFunction;
}

const arrowFunction = new ArrowFunction();

export  { regularFunction, arrowFunction };
