const theOneFunc = seconds => {
  console.log(`Hello after ${seconds} seconds`);
};

// You can only define ONE function
// would refactor this in real life so you could pass in
// delay seconds instead of defining 2 vars and repeating myself

// Hello after 4 seconds
firstCallSeconds = 4;
setTimeout(theOneFunc, firstCallSeconds * 1000, firstCallSeconds);

secondCallSeconds = 8;
// Hello after 8 seconds
setTimeout(theOneFunc, secondCallSeconds * 1000, secondCallSeconds);

