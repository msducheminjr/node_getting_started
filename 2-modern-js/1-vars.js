{
  // Block Scope
}

if (true) {
  // Block Scope
}

// change var to let here to keep i in block scope
for (let i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  // var does not leak out of the function scope
  var result = a + b;
  return result;
}

// was incorrectly an expression 4 + 3 in original
sum(4, 3);
