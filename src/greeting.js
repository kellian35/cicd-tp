function getGreeting(name) {
  if (name) {
    return `Hello ${name}!`;
  }
  return "Hello world!";
}

module.exports = { getGreeting };
