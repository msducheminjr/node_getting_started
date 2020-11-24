// make it like an echo with a setTimeout()
const echoWrite = (chunk) => {
  process.stdout.write(chunk);
}

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    setTimeout(() => { echoWrite(chunk) }, 300);
  }
});


/* ORIGINAL
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk);
  }
});
*/
