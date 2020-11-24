setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
  console.log('Goodbye cruel world!');
});

// will be printed first
console.log('Hello kind world!');
