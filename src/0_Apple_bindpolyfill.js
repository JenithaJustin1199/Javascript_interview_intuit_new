const person = { name: "Jeni" };

function greet(city) {
  console.log(this.name, city);
}

const boundFn = greet.bind(person);

boundFn("Bangalore"); // Jeni Bangalore
Function.prototype.myBind = function (context, ...bindArgs) {

  const originalFunction = this;

  return function (...callArgs) {

    return originalFunction.apply(
      context,
      [...bindArgs, ...callArgs]
    );

  };
};

function Person(name) {
  this.name = name;
}

const BoundPerson = Person.bind({});

const p = new BoundPerson("Jeni");

console.log(p.name); // Jeni
Function.prototype.myBind = function (context, ...bindArgs) {

  const originalFunction = this;

  function boundFunction(...callArgs) {

    // If called with new, use new instance as this
    const isCalledWithNew = this instanceof boundFunction;

    const finalThis = isCalledWithNew ? this : context;

    return originalFunction.apply(
      finalThis,
      [...bindArgs, ...callArgs]
    );
  }

  // Maintain prototype chain
  boundFunction.prototype = Object.create(originalFunction.prototype);

  return boundFunction;
};
