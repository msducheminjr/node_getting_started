// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
// Reference is constant but object is still mutable
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

// Object.freeze() will freeze object but only at first level.
// Will not freeze nested objects. Can use Immutable.js as alternative
